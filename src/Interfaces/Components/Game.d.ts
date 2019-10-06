//#region Global Imports
import { Props } from 'prop-types';
//#endregion Global Imports

//#region Interfaces Imports
import { PartyModel } from '@Interfaces';
//#endregion Interfaces Imports



declare namespace IGame {
  export type IProps = IOwnProps & IStateProps & IDispatchProps;

  export interface IOwnProps extends Props<{}> {}
  
  export interface IState {
    winner: any;
    gameDialog: any;
    board: Array;
    turn: string;
    gameLocked: boolean;
    gameEnded: boolean;
    totalMoves: number;
  }
  export interface IStateProps { }

	export interface IDispatchProps {
		Map(payload: Actions.IMapPayload): Actions.IMapResponse;
		CreateParty(payload: Actions.ICreatePartyPayload): Actions.ICreatePartyResponse;
		UpdateParty(payload: Actions.IUpdatePayload): Actions.IUpdateResponse;
		EndParty(payload: Actions.IEndPartyPayload): Actions.IEndPartyResponse;
		GetParty(payload: Actions.IGetPartyPayload): Actions.IGetPartyResponse;
	}

  namespace Actions {
    export interface IMapPayload {}
    export interface IMapResponse {}

		export interface ICreatePartyPayload extends PlanetaryModel.CreatePartyPayload {}
		export interface ICreatePartyResponse extends PlanetaryModel.CreatePartyResponse {}

		export interface IUpdatePartyPayload extends PlanetaryModel.UpdatePartyPayload {
			params: BackendPayload;
}
		export interface IUpdatePartyResponse extends PlanetaryModel.UpdatePartyResponse {}

		export interface IEndPartyPayload extends PlanetaryModel.EndPartyPayload {}
		export interface IEndPartyResponse extends PlanetaryModel.EndPartyResponse {}
		
		export interface IGetPartyPayload extends PlanetaryModel.GetPartyPayload {}
		export interface IGetPartyResponse extends PlanetaryModel.GetPartyResponse {}
  }
}
