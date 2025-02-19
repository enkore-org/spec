import type {
	EnkoreSessionAPI,
	EnkoreNodeAPIOptions
} from "#~src/export/__star_export.mts"
import type {DefineEvent, EventEmitter} from "@aniojs/event-emitter"
import type {NodeAPIMessage} from "@enkore/primitives"

type MessageEvent = DefineEvent<"message", NodeAPIMessage>

type Events = [MessageEvent]

// -- build steps ---
type BuildProducts = (
	names: string[] | null
) => Promise<{
	messages: NodeAPIMessage[]
}>

type Compile = () => Promise<{
	messages: NodeAPIMessage[],
	buildProducts: BuildProducts
}>

type Lint = () => Promise<{
	messages: NodeAPIMessage[],
	compile: Compile
}>

type Preprocess = () => Promise<{
	messages: NodeAPIMessage[],
	lint: Lint
}>

type Autogenerate = () => Promise<{
	messages: NodeAPIMessage[],
	preprocess: Preprocess
}>

type Clean = () => Promise<{
	messages: NodeAPIMessage[],
	autogenerate: Autogenerate
}>

type Init = () => Promise<{
	clean: Clean,
	messages: NodeAPIMessage[]
	productNames: string[]
}>
// -- build steps ---

type Build = () => Promise<{
	messages: NodeAPIMessage[]
}>

export type Definition = {
	enkore: (
		projectRoot: string,
		options: EnkoreNodeAPIOptions
	) => Promise<{
		session: EnkoreSessionAPI,
		project: EventEmitter<Events> & {
			init: Init
			build: Build
		}
	}>
}
