import type {
	EnkoreSessionAPI,
	EnkoreCoreRealmDependencyInstallSpecification,
	EnkoreNodeAPIMessage
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

	preInitialize: (
		f: EnkoreSessionAPI
	) => Promise<undefined>

	initialize: (
		f: EnkoreSessionAPI
	) => Promise<{
		products: {
			name: string
		}[]
	}>

	setInternalData: (key: string, data: any) => unknown
	getInternalData: (key: string) => unknown

	emitMessage: (
		severity: EnkoreNodeAPIMessage["severity"],
		id: EnkoreNodeAPIMessage["id"],
		message: EnkoreNodeAPIMessage["message"]
	) => undefined

	preprocessSourceFile?: (
		f: EnkoreSessionAPI,
		sourceFilePath: string,
		sourceCode: string
	) => Promise<string>

	generateObjectFile: (
		f: EnkoreSessionAPI,
		sourceFilePath: string,
		sourceCode: string
	) => Promise<ObjectFile | ObjectFile[] | "ignore" | "copy">

	generateProduct: (
		f: EnkoreSessionAPI,
		productName: string
	) => Promise<undefined>
}
