import type {
	EnkoreRealmJSConfig,
	EnkoreRealmCConfig,
	EnkoreRealmWebConfig,
	EnkoreAutoGeneratedFile
} from "#~src/export/__star_export.mts"

export type Definition = {
	realm: {
		name: "js"
		config: EnkoreRealmJSConfig
	} | {
		name: "c"
		config: EnkoreRealmCConfig
	} | {
		name: "web"
		config: EnkoreRealmWebConfig
	}

	autogeneratedFiles?: EnkoreAutoGeneratedFile[]

	buildConstants?: Record<string, string>
}
