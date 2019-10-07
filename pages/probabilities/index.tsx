//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
//#endregion Global Imports

//#region Interface Imports
import { IProbaPage, IStore } from '@Interfaces';
import { Menu, Diagram } from '@Components';
import { HomeActions } from '@Actions';
//#endregion Interface Imports

//#region Local Imports
import './index.scss';
//#endregion Local Imports

export class ProbaPage extends React.Component<IProbaPage.IProps, IProbaPage.IState> {
	constructor(props: IProbaPage.IProps) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<div className="probabilities">
				<Menu title="TIC TAC TOE - PROBABILITIES" />
				<Diagram />
			</div>
		);
	}
}

const mapStateToProps = (state: IStore) => state.home;

const mapDispatchToProps = (dispatch: Dispatch) => ({
	Map: bindActionCreators(HomeActions.Map, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ProbaPage);
