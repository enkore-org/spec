import type {JSRuntimeLogLevel, JSRuntimePackageInformation} from "@enkore/primitives"
import type {
	EnkoreJSRuntimeProject,
	EnkoreJSRuntimeContextOptions
} from "#~src/export/__star_export.mts"

type LogMethod = {
	[K in JSRuntimeLogLevel]: (...messages: string[]) => undefined
} & {
	/**
	 * @brief Log a message with a severity.
	 */
	(...messages: string[]) : undefined
}

export type Definition = {
	readonly __internalDoNotUse: {
		// JSRuntimePackageInformation is intentionally
		// less informative than the NodePackageJSON type
		originPackage: JSRuntimePackageInformation
	}

	log: LogMethod

	project: EnkoreJSRuntimeProject
	options: EnkoreJSRuntimeContextOptions
}
