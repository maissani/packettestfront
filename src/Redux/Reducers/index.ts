import { combineReducers } from 'redux';

import { GameReducer } from './game';

import { HomeReducer } from './home';

export default combineReducers({
    game: GameReducer,
	home: HomeReducer,
});
