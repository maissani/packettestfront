import { BackendPayload, BackendResponse } from '@Interfaces';

/**
 * @module @interface PartyModel
 */
declare namespace PartyModel {
	export interface GetBackendPayload {
		params: BackendPayload;
	}

	export interface UpdatePartyPayload {
		identifier: any;
		params: BackendPayload;
	}

	export interface GetBackendResponse extends BackendResponse {}
}
