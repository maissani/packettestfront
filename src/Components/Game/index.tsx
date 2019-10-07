//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
//#endregion Local Imports

//#region Interface Imports
import { IGame, IStore } from '@Interfaces';
import { GameActions } from '@Actions';
import CircleComponent from './circle';
import CrossComponent from './cross';
//#endregion Interface Imports

class Game extends React.Component<IGame.IProps, IGame.IState> {
	// public state: { id: string; winner: any; gameDialog: any; turn: string; gameLocked: boolean; gameEnded: boolean; board: any[]; totalMoves: number; };

	constructor(props: IGame.IProps) {
		super(props);

		this.state = {
			turn: 'X',
			winner: undefined,
			gameDialog: undefined,
			board: Array(9).fill(''),
			gameLocked: false,
			gameEnded: false,
			totalMoves: 0,
		};

		console.log(this.props)
		console.log(this.state)

	}

	componentDidMount() {
		this.start();
	}

	start() {
		console.log("start")
		this.props.CreateParty({});
	}

	update(updatedVector: Array) {
		console.log("update",this.state);
		this.props.UpdateParty({params:{identifier: this.props.id ,vector: updatedVector}});
	}

	end() {
		this.props.EndParty({});
		console.log("Game is finished");
	}

	

  clicked(boardKey: any) {
		console.log(this.props)
		let {totalMoves, turn, board, gameEnded, gameLocked} = this.state;
    if(gameEnded || gameLocked) return;

    if(board[boardKey] == '') {
			board[boardKey] = turn;
			console.log("before", turn)
			turn = turn == 'X' ? 'O' : 'X';
			console.log("after", turn)
			totalMoves++;

			this.setState({
				board: board,
				turn: turn,
				totalMoves: totalMoves,
			})
			let updateVector = Array(9).fill(0)
			updateVector[boardKey] = 1
			this.update(updateVector);
    }

    console.log(totalMoves);

    var result = this.checkWinner();

    if(result == 'X') {
      this.setState({
				gameEnded: true,
        winner: 'X',
        gameDialog: 'Match won by X'
			});
			this.end();
      this.setState({
				gameEnded: true,
        winner: 'O',
        gameDialog: 'Match won by O'
			});
			this.end();
    } else if(result == 'draw') {
      this.setState({
				gameEnded: true,
        winner: 'draw',
        gameDialog: 'Match is drawn'
			});
			this.end();
    }
    
    if(turn == 'O' && !gameEnded) {
			this.setState({
				gameLocked: true
			})
      setTimeout(()=> {
        do {
					var random = Math.floor(Math.random()*9);
				} while(board[random] != '');
				this.setState({
					gameLocked: false
				})
				this.clicked(random);
      }, 1000);
		}
		this.forceUpdate()
  }

  checkWinner() {
    var moves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]];
    var board = this.state.board;
    for(let i=0;i<moves.length;i++) {
      if(board[moves[i][0]] == board[moves[i][1]] && board[moves[i][1]] == board[moves[i][2]])
          return board[moves[i][0]];
    }

    // console.log(this.state.totalMoves);
    if(this.state.totalMoves == 9) {
      return 'draw';
    }
  }

	public displaySquare(index: any) {
		const {board} = this.state;
		// console.log("index", index)
		// console.log("state", this.state)
		// console.log("item", this.state.board[index])
		switch (board[index]) {
			case "X":
					return(
						<div>
							<CrossComponent className="cross"/>
						</div>
					)
				break;
				case "O":
					return(
						<div>
							<CircleComponent className="circle"/>
						</div>
					)
				break;
			default:
				break;
		}
	}

	public render(): JSX.Element {
		const { gameDialog, board }  = this.state;
		return (
			<div className="Game">
				<div id="status">{gameDialog}</div>
				<div id="board" >
					{
						board.map((_item, index) => 
								<div className="square" key={index} onClick={() => { this.clicked(index)}}>
									{ this.displaySquare(index) }
								</div>
							)
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => state.game;

const mapDispatchToProps = (dispatch: Dispatch) => ({
	CreateParty: bindActionCreators(GameActions.CreateParty, dispatch),
	UpdateParty: bindActionCreators(GameActions.UpdateParty, dispatch),
	EndParty: bindActionCreators(GameActions.EndParty, dispatch),
	GetParty: bindActionCreators(GameActions.GetParty, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
