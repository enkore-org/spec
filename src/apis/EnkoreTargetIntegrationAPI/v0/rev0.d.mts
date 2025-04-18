import type {
	EnkoreSessionAPI,
	EnkoreCoreTargetDependencyInstallSpecification,
	EnkoreBoilerplateFile,
	EnkoreProjectFile
} from "#~src/export/__star_export.mts"

import type {NodeAPIMessage} from "@enkore/primitives"

type ObjectFile = ({
	path: string
} | {
	name: string
}) & {
	contents: string
}

export type Definition = {
	getDependenciesToInstall: () => Promise<{
		[dependencyName: string]: EnkoreCoreTargetDependencyInstallSpecification
	}>

	getBoilerplateFiles?: (
		f: EnkoreSessionAPI
	) => Promise<EnkoreBoilerplateFile[]>

	getGitIgnoredFiles?: (
		f: EnkoreSessionAPI
	) => Promise<string[]>

	hook: {
		preInitialize?: (
			f: EnkoreSessionAPI
		) => Promise<undefined>

		preLint?: (
			f: EnkoreSessionAPI
		) => Promise<undefined>

		preCompile?: (
			f: EnkoreSessionAPI
		) => Promise<undefined>
	}

	projectSourceFileFilter?: (
		f: EnkoreSessionAPI,
		file: EnkoreProjectFile
	) => Promise<boolean>

	getInitialInternalData?: () => Promise<object>

	initialize: (
		f: EnkoreSessionAPI
	) => Promise<{
		products: {
			name: string
		}[]
	}>

	preprocess?: (
		f: EnkoreSessionAPI,
		file: EnkoreProjectFile,
		sourceCode: string
	) => Promise<string>

	lint?: (
		f: EnkoreSessionAPI,
		file: EnkoreProjectFile,
		sourceCode: string
	) => Promise<NodeAPIMessage[]>

	compile: (
		f: EnkoreSessionAPI,
		file: EnkoreProjectFile,
		sourceCode: string
	) => Promise<ObjectFile | ObjectFile[] | "unsupported" | "skip" | "copy">

	generateProduct: (
		f: EnkoreSessionAPI,
		productName: string
	) => Promise<undefined>

	testProduct: (
		f: EnkoreSessionAPI,
		productName: string
	) => Promise<undefined>

	publishProduct: (
		f: EnkoreSessionAPI,
		productName: string
	) => Promise<undefined>
}
