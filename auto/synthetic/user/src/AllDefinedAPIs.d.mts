import type {DefineAPI} from "#~src/DefineAPI.d.mts"

import type {Definition as EnkoreCoreAPI_V0_Rev0Definition} from "#~src/apis/EnkoreCoreAPI/v0/rev0.d.mts"
import type {Definition as EnkoreJSRuntimeAssetsAPI_V0_Rev0Definition} from "#~src/apis/EnkoreJSRuntimeAssetsAPI/v0/rev0.d.mts"
import type {Definition as EnkoreNodeAPI_V0_Rev0Definition} from "#~src/apis/EnkoreNodeAPI/v0/rev0.d.mts"
import type {Definition as EnkoreRealmJSAutogenerateAPI_V0_Rev0Definition} from "#~src/apis/EnkoreRealmJSAutogenerateAPI/v0/rev0.d.mts"
import type {Definition as EnkoreRealmJSRuntimeProjectAPI_V0_Rev0Definition} from "#~src/apis/EnkoreRealmJSRuntimeProjectAPI/v0/rev0.d.mts"
import type {Definition as EnkoreRealmJSRuntimeRuntimeAPI_V0_Rev0Definition} from "#~src/apis/EnkoreRealmJSRuntimeRuntimeAPI/v0/rev0.d.mts"
import type {Definition as EnkoreSessionAPI_V0_Rev0Definition} from "#~src/apis/EnkoreSessionAPI/v0/rev0.d.mts"
import type {Definition as EnkoreTargetIntegrationAPI_V0_Rev0Definition} from "#~src/apis/EnkoreTargetIntegrationAPI/v0/rev0.d.mts"

export type EnkoreCoreAPI_V0_Rev0 = DefineAPI<"EnkoreCoreAPI", 0, 0, EnkoreCoreAPI_V0_Rev0Definition>
export type EnkoreJSRuntimeAssetsAPI_V0_Rev0 = DefineAPI<"EnkoreJSRuntimeAssetsAPI", 0, 0, EnkoreJSRuntimeAssetsAPI_V0_Rev0Definition>
export type EnkoreNodeAPI_V0_Rev0 = DefineAPI<"EnkoreNodeAPI", 0, 0, EnkoreNodeAPI_V0_Rev0Definition>
export type EnkoreRealmJSAutogenerateAPI_V0_Rev0 = DefineAPI<"EnkoreRealmJSAutogenerateAPI", 0, 0, EnkoreRealmJSAutogenerateAPI_V0_Rev0Definition>
export type EnkoreRealmJSRuntimeProjectAPI_V0_Rev0 = DefineAPI<"EnkoreRealmJSRuntimeProjectAPI", 0, 0, EnkoreRealmJSRuntimeProjectAPI_V0_Rev0Definition>
export type EnkoreRealmJSRuntimeRuntimeAPI_V0_Rev0 = DefineAPI<"EnkoreRealmJSRuntimeRuntimeAPI", 0, 0, EnkoreRealmJSRuntimeRuntimeAPI_V0_Rev0Definition>
export type EnkoreSessionAPI_V0_Rev0 = DefineAPI<"EnkoreSessionAPI", 0, 0, EnkoreSessionAPI_V0_Rev0Definition>
export type EnkoreTargetIntegrationAPI_V0_Rev0 = DefineAPI<"EnkoreTargetIntegrationAPI", 0, 0, EnkoreTargetIntegrationAPI_V0_Rev0Definition>

export type EnkoreCoreAPI_V0 = EnkoreCoreAPI_V0_Rev0
export type EnkoreJSRuntimeAssetsAPI_V0 = EnkoreJSRuntimeAssetsAPI_V0_Rev0
export type EnkoreNodeAPI_V0 = EnkoreNodeAPI_V0_Rev0
export type EnkoreRealmJSAutogenerateAPI_V0 = EnkoreRealmJSAutogenerateAPI_V0_Rev0
export type EnkoreRealmJSRuntimeProjectAPI_V0 = EnkoreRealmJSRuntimeProjectAPI_V0_Rev0
export type EnkoreRealmJSRuntimeRuntimeAPI_V0 = EnkoreRealmJSRuntimeRuntimeAPI_V0_Rev0
export type EnkoreSessionAPI_V0 = EnkoreSessionAPI_V0_Rev0
export type EnkoreTargetIntegrationAPI_V0 = EnkoreTargetIntegrationAPI_V0_Rev0

export type EnkoreCoreAPI = EnkoreCoreAPI_V0
export type EnkoreJSRuntimeAssetsAPI = EnkoreJSRuntimeAssetsAPI_V0
export type EnkoreNodeAPI = EnkoreNodeAPI_V0
export type EnkoreRealmJSAutogenerateAPI = EnkoreRealmJSAutogenerateAPI_V0
export type EnkoreRealmJSRuntimeProjectAPI = EnkoreRealmJSRuntimeProjectAPI_V0
export type EnkoreRealmJSRuntimeRuntimeAPI = EnkoreRealmJSRuntimeRuntimeAPI_V0
export type EnkoreSessionAPI = EnkoreSessionAPI_V0
export type EnkoreTargetIntegrationAPI = EnkoreTargetIntegrationAPI_V0

export type AllDefinedAPIs = EnkoreCoreAPI | EnkoreJSRuntimeAssetsAPI | EnkoreNodeAPI | EnkoreRealmJSAutogenerateAPI | EnkoreRealmJSRuntimeProjectAPI | EnkoreRealmJSRuntimeRuntimeAPI | EnkoreSessionAPI | EnkoreTargetIntegrationAPI
