import type {Definition} from "#~src/entities/EnkoreTargetJSNoneOptions/v0/rev0.d.mts"
import {createEntity} from "#~src/export/createEntity.mts"

export function createTargetJSNoneOptions(data: Definition) {
	return createEntity("EnkoreTargetJSNoneOptions", 0, 0, data)
}
