import type {
	EnkoreSessionAPI,
	EnkoreCoreRealmDependencyInstallSpecification
} from "#~src/export/__star_export.mts"

type ObjectFile = ({
	path: string
} | {
	name: string
}) & {
	contents: string
}

export type Definition = {
	getRealmDependenciesToInstall: () => Promise<{
		[dependencyName: string]: EnkoreCoreRealmDependencyInstallSpecification
	}>

	getBoilerplateFiles: (
		f: EnkoreSessionAPI
	) => Promise<{
		path: string
		content: string
		overwrite: boolean
	}[]>

	hook: {
		preInitialize?: (
			f: EnkoreSessionAPI
		) => Promise<undefined>

		preCompile?: (
			f: EnkoreSessionAPI
		) => Promise<undefined>
	}

	initialize: (
		f: EnkoreSessionAPI
	) => Promise<{
		products: {
			name: string
		}[]
	}>

	preprocess?: (
		f: EnkoreSessionAPI,
		sourceFilePath: string,
		sourceCode: string
	) => Promise<string>

	compile: (
		f: EnkoreSessionAPI,
		sourceFilePath: string,
		sourceCode: string
	) => Promise<ObjectFile | ObjectFile[] | "ignore" | "copy">

	generateProduct: (
		f: EnkoreSessionAPI,
		productName: string
	) => Promise<undefined>
}
