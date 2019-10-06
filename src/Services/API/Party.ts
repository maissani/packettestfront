//#region Local Imports
import { Http } from '@Services';
import { PartyModel } from '@Interfaces';
//#endregion Local Imports

export const PartyService = {
	CreateParty: async (
		payload: PartyModel.GetBackendPayload,
	): Promise<PartyModel.GetBackendResponse> => {
		let response: PartyModel.GetBackendResponse;

		try {
			response = await Http.Request<PartyModel.GetBackendResponse>(
				'GET',
				'/party/create',
				payload.params,
			);
		} catch (error) {
			response = {
				id: '',
				moves: [],
				isStartedWithX: true,
			};
		}

		return response;
	},
	UpdateParty: async (
		payload: PartyModel.UpdatePartyPayload,
	): Promise<PartyModel.GetBackendResponse> => {
		let response: PartyModel.GetBackendResponse;

		try {
			response = await Http.Request<PartyModel.GetBackendResponse>(
				'POST',
				`/party/${payload.params.identifier}`,
				payload.params,
			);
		} catch (error) {
			response = {
				id: '',
				moves: [],
				isStartedWithX: true,
			};
		}

		return response;
	},
	EndParty: async (
		payload: PartyModel.GetBackendPayload,
	): Promise<PartyModel.GetBackendResponse> => {
		let response: PartyModel.GetBackendResponse;

		try {
			response = await Http.Request<PartyModel.GetBackendResponse>(
				'GET',
				'/party/create',
				payload.params,
			);
		} catch (error) {
			response = {
				id: '',
				moves: [],
				isStartedWithX: true,
			};
		}

		return response;
	},
};
