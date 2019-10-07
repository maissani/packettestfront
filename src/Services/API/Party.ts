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
			response = {};
		}

		return response;
	},
	UpdateParty: async (
		payload: PartyModel.UpdatePartyPayload,
	): Promise<PartyModel.GetBackendResponse> => {
		let response: PartyModel.GetBackendResponse;
		console.log("updating parties", payload)
		try {
			response = await Http.Request<PartyModel.GetBackendResponse>(
				'POST',
				`/party/${payload.params.identifier}/move`,
				{},
				{ vector: payload.params.vector }
			);
		} catch (error) {
			console.log(error)
			response = {};
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
			response = {};
		}

		return response;
	},
};
