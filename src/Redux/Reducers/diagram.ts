//#region Local Imports
import { ActionConsts } from '@Definitions';
//#endregion Local Imports

//#region Interface Imports
import { IAction, IDiagram } from '@Interfaces';
//#endregion Interface Imports

/**
 * INITIAL_STATE
*/
const INITIAL_STATE: IDiagram.IStateProps = { };

type IMapPayload = IDiagram.Actions.IMapPayload;

export const DiagramReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
	switch (action.type) {
		case ActionConsts.Diagram.SetReducer:
			return {
				...state,
				...action.payload
			};

		case ActionConsts.Diagram.ResetReducer:
			return INITIAL_STATE;

		default:
			return state;
	}
};
