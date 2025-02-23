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

export type Definition = {
	project: {
		root: string
		config: EnkoreConfig
	}

	realm: {
		getConfig: () => 
			EnkoreRealmJSConfig  |
			EnkoreRealmCConfig   |
			EnkoreRealmWebConfig

		getDependency: (dependencyName: string) => unknown
		getDependencyVersion: (dependencyName: string) => string
		getDependencyPackageJSON: (dependencyName: string) => NodePackageJSON
		getDependencyPath: (dependencyName: string) => string

		setInternalData: (key: string, value: any) => undefined
		hasInternalData: (key: string) => boolean
		getInternalData: (key: string) => unknown
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
			relativeBaseDir?: string|undefined
		) => EnkoreProjectFile[]
	}

	addAutogeneratedFile: (file: EnkoreAutogeneratedFile) => undefined
}
