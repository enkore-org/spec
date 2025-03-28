export type Definition = {
	_realm: "js"

	externalPackages?: string[]
	publishWithExactDependencyVersions?: boolean

	runtime?: "node" | "browser" | "agnostic"

	createTypesPackage?: {
		orgName: string
	}

	exports?: {
		[name: string]: {
			externalPackages?: string[]
			checkAgainstInterface?: {
				named?: [string, string]
				default?: [string, string]
			}
		}
	}
}
