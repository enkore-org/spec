import type {
	EnkoreConfig,
	EnkoreRealmJSConfig,
	EnkoreRealmCConfig,
	EnkoreRealmWebConfig,
	EnkoreAutogeneratedFile,
	EnkoreProjectFile,
	EnkoreNodeAPIOptions
} from "#~src/export/__star_export.mts"

import type {NodeAPIMessage, NodePackageJSON} from "@enkore/primitives"

type EnkoreRealmConfig = EnkoreRealmJSConfig  |
                         EnkoreRealmCConfig   |
                         EnkoreRealmWebConfig

type EnkoreRealm = Extract<EnkoreRealmConfig, {
	_realm: string
}>["_realm"]

type EnkoreRealmConfigMap = {
	[K in EnkoreRealm]: Extract<EnkoreRealmConfig, {
		_realm: K
	}>
}

export type Definition = {
	project: {
		root: string
		config: EnkoreConfig
		packageJSON: NodePackageJSON
	}

	realm: {
		getConfig: <T extends EnkoreRealm>(
			realm: T
		) => EnkoreRealmConfigMap[T]

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
