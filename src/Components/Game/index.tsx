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
	public state: { winner: any; gameDialog: any; turn: string; gameLocked: boolean; gameEnded: boolean; board: any[]; totalMoves: number; };

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

	}

	componentDidMount() {
		console.log(this.props)
		this.start();
	}

	start() {
		console.log("start")
		this.props.CreateParty({});
	}

	update() {
		console.log("update");
		this.props.UpdateParty({});
	}

	end() {
		this.props.EndParty({});
		console.log("Game is finished");
	}

  clicked(boardKey: any) {
		// console.log(this.state)
    if(this.state.gameEnded || this.state.gameLocked) return;

    if(this.state.board[boardKey] == '') {
      this.state.board[boardKey] = this.state.turn;
      
      this.state.turn = this.state.turn == 'X' ? 'O' : 'X',
      
			this.state.totalMoves++;
			this.update();
    }

    console.log(this.state.totalMoves);

    var result = this.checkWinner();

    if(result == 'X') {
      this.state.gameEnded = true;
      this.setState({
        winner: 'X',
        gameDialog: 'Match won by X'
			});
			this.end();
    } else if(result == 'O') {
      this.state.gameEnded = true;
      this.setState({
        winner: 'O',
        gameDialog: 'Match won by O'
			});
			this.end();
    } else if(result == 'draw') {
      this.state.gameEnded = true;
      this.setState({
        winner: 'draw',
        gameDialog: 'Match is drawn'
			});
			this.end();
    }
    
    if(this.state.turn == 'O' && !this.state.gameEnded) {
      this.state.gameLocked = true;
      setTimeout(()=> {
        do {
          var random = Math.floor(Math.random()*9);
        } while(this.state.board[random] != '');
        this.state.gameLocked = false;
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
		// console.log("index", index)
		// console.log("state", this.state)
		// console.log("item", this.state.board[index])
		switch (this.state.board[index]) {
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
		return (
			<div className="Game">
				<div id="status">{this.state.gameDialog}</div>
				<div id="board" >
					{
						this.state.board.map((_item, index) => 
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
