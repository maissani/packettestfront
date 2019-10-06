
//#region Local Imports
import { ActionConsts } from '@Definitions';

//#endregion Local Imports

//#region Interface Imports
import { IHomePage } from '@Interfaces';
//#endregion Interface Imports

export const HomeActions = {
	Map: (payload: {}) => ({
		payload,
		type: ActionConsts.Home.SetReducer,
	}),

	Reset: () => ({
		type: ActionConsts.Home.ResetReducer,
	}),

};
