import type {Definition} from "#~src/entities/EnkoreAutogeneratedFile/v0/rev0.d.mts"
import {createEntity} from "#~src/export/createEntity.mts"

export function createAutogeneratedFile(data: Definition) {
	return createEntity("EnkoreAutogeneratedFile", 0, 0, data)
}
