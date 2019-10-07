import { ActionConsts } from "@Definitions";

/**
 * ACTIONS
*/
export const DiagramActions = {
	Map: (payload: any) => (
		{
			payload,
			type: ActionConsts.Diagram.SetReducer
		}
	),

	Reset: () => ({
		type: ActionConsts.Diagram.ResetReducer
	})
}