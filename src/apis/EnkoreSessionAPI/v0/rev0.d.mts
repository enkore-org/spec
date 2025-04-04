import type {
	EnkoreConfig,
	EnkoreAutogeneratedFile,
	EnkoreProjectFile,
	EnkoreNodeAPIOptions
} from "#~src/export/__star_export.mts"
import type {AllEnkoreTargets} from "#~src/AllEnkoreTargets.d.mts"
import type {NodeAPIMessage, NodePackageJSON} from "@enkore/primitives"
import type {DistributiveOmit} from "#~src/DistributiveOmit.d.mts"

type EnkoreTarget = AllEnkoreTargets

type EnkoreTargetIdentifier = Extract<EnkoreTarget, {
	_targetIdentifier: string
}>["_targetIdentifier"]

type EnkoreTargetMap = {
	[K in EnkoreTargetIdentifier]: Extract<EnkoreTarget, {
		_targetIdentifier: K
	}>
}

export type Definition = {
	project: {
		root: string
		config: EnkoreConfig
		packageJSON: NodePackageJSON
	}

	target: {
		getConfig: <T extends EnkoreTargetIdentifier>(
			targetIdentifier: T
		) => DistributiveOmit<EnkoreTargetMap[T], "_targetIdentifier">

		getDependency: (dependencyName: string) => unknown
		getDependencyVersion: (dependencyName: string) => string
		getDependencyPackageJSON: (dependencyName: string) => NodePackageJSON
		getDependencyPath: (dependencyName: string) => string

		getInternalData: () => object
	}

	enkore: {
		getOptions: () => EnkoreNodeAPIOptions

		getCurrentStep: () => string|undefined

		emitMessage: {
			(
				severity: NodeAPIMessage["severity"],
				message: NodeAPIMessage["message"]
			) : undefined

			(
				severity: NodeAPIMessage["severity"],
				id: NodeAPIMessage["id"],
				message: NodeAPIMessage["message"]
			) : undefined
		}

		getProjectFiles: (
			relativeBaseDir?: string|string[]|undefined
		) => EnkoreProjectFile[]

		getAllProjectFiles: (
			relativeBaseDir?: string|string[]|undefined
		) => EnkoreProjectFile[]
	}

	addAutogeneratedFile: (file: EnkoreAutogeneratedFile) => undefined
}
