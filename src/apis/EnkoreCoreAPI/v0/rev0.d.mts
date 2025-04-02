import type {TargetIdentifier} from "@enkore/primitives"
import type {
	EnkoreTargetIntegrationAPI,
	EnkoreCoreTargetDependency,
	EnkoreLockFile,
	EnkoreCoreTargetDependencyInstallSpecification
} from "#~src/export/__star_export.mts"

export type Definition = {
	setDebugMode: (mode: boolean) => boolean
	getDebugMode: () => boolean

	createTemporaryFile: (
		projectRoot: string, fileExtension?: string
	) => Promise<string>

	createTemporaryDirectory: (
		projectRoot: string
	) => Promise<string>

	//
	// - loads the target integration api
	// - installs the target dependencies
	// - manages the lockfile
	//
	initializeProject: (
		projectRoot: string | ["inferFromCLIArgs"],
		isCIEnvironment: boolean,
		options?: {
			npmBinaryPath?: string,
			force?: boolean
		}
	) => Promise<{
		readonly initialLockFile: EnkoreLockFile

		targetIntegrationAPI: EnkoreTargetIntegrationAPI

		// update lock file dependencies
		// return dependency stamp for core data file
		updateLockfileDependencies: (
			dependencies: {
				[dependencyName: string]: EnkoreCoreTargetDependencyInstallSpecification
			}
		) => Promise<string>

		updateLockfileAutogeneratedFiles: (
			files: {
				[path: string]: {
					hash: string
				}
			}
		) => Promise<undefined>
	}>

	getInstalledTargetDependencyNames: (
		projectRoot: string | ["inferFromCLIArgs"],
		targetIdentifier: TargetIdentifier,
	) => Promise<string[]>

	loadTargetDependency: (
		projectRoot: string | ["inferFromCLIArgs"],
		targetIdentifier: TargetIdentifier,
		dependencyName: string
	) => Promise<EnkoreCoreTargetDependency>

	findProjectRootFromDirectory: (
		startDirectory: string
	) => Promise<string|false>
}
