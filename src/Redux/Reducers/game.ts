//#region Local Imports
import { ActionConsts } from '@Definitions';
//#endregion Local Imports

//#region Interface Imports
import { IAction, IGame } from '@Interfaces';
//#endregion Interface Imports

/**
 * INITIAL_STATE
*/
const INITIAL_STATE: IGame.IStateProps = { };

type IMapPayload = IGame.Actions.IMapPayload;

export const GameReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
	switch (action.type) {
		case ActionConsts.Game.SetReducer:
			return {
				...state,
				...action.payload
			};

		case ActionConsts.Game.ResetReducer:
			return INITIAL_STATE;

		default:
			return state;
	}
};
