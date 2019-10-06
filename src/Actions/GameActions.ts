//#region Global Imports
import { Dispatch } from 'redux';
//#endregion Global Imports

//#region Local Imports
import { ActionConsts } from '@Definitions';
//#endregion Local Imports


//#region Interface Imports
import { IGame } from '@Interfaces';
//#endregion Interface Imports

import { PartyService } from '@Services';


/**
 * ACTIONS
*/
export const GameActions = {
	Map: (payload: any) => (
		{
			payload,
			type: ActionConsts.Game.SetReducer
		}
	),

	Reset: () => ({
		type: ActionConsts.Game.ResetReducer
	}),

	CreateParty: (payload: IGame.Actions.ICreatePartyPayload) => async (dispatch: Dispatch) => {
		const result = await PartyService.CreateParty({
			params: payload.params,
		});

		dispatch({
			payload: {
				image: result,
			},
			type: ActionConsts.Game.SetReducer,
		});
	},

	UpdateParty: (payload: IGame.Actions.IUpdatePartyPayload) => async (dispatch: Dispatch) => {
		const result = await PartyService.UpdateParty({
			params: payload.params,
		});

		dispatch({
			payload: {
				image: result,
			},
			type: ActionConsts.Game.SetReducer,
		});
	},

	EndParty: (payload: IGame.Actions.IEndPartyPayload) => async (dispatch: Dispatch) => {
		const result = await PartyService.EndParty({
			params: payload.params,
		});

		dispatch({
			payload: {
				image: result,
			},
			type: ActionConsts.Game.SetReducer,
		});
	},

	GetParty: (payload: IGame.Actions.IGetPartyPayload) => async (dispatch: Dispatch) => {
		const result = await PartyService.GetParty({
			params: payload.params,
		});

		dispatch({
			payload: {
				image: result,
			},
			type: ActionConsts.Game.SetReducer,
		});
	},
}