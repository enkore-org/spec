import type {
	EnkoreRealmJSConfig,
	EnkoreRealmCConfig,
	EnkoreRealmWebConfig,
	EnkoreAutogeneratedFile
} from "#~src/export/__star_export.mts"

export type Definition = {
	target: EnkoreRealmJSConfig |
	        EnkoreRealmCConfig  |
	        EnkoreRealmWebConfig

	autogeneratedFiles?: EnkoreAutogeneratedFile[]

	buildConstants?: Record<string, string>
}
