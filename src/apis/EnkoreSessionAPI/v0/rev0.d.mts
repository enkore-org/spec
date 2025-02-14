import type {
	EnkoreConfig,
	EnkoreRealmJSConfig,
	EnkoreRealmCConfig,
	EnkoreRealmWebConfig,
	EnkoreAutoGeneratedFile
} from "#~src/export/__star_export.mts"

import type {NodePackageJSON} from "@enkore/primitives"

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
	}

	addAutoGeneratedFile: (file: EnkoreAutoGeneratedFile) => undefined
}
