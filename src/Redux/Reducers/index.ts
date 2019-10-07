import { combineReducers } from 'redux';

import { DiagramReducer } from './diagram';

import { GameReducer } from './game';

import { HomeReducer } from './home';

export default combineReducers({
    diagram: DiagramReducer,
    game: GameReducer,
	home: HomeReducer,
});
