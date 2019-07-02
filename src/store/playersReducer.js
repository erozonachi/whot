import * as types from '../actions';

const initialState = {
  players: [],
  playerInfo: {},
  playHistory: [],
  gameType: null,
  currentPlayer: null,
  isHoldOn: false,
  isPickTwo: false,
  isGeneralMarket: false,
  isLastCard: false,
  start: false,
  pause:false,
  resume: false,
  finish: false,
  winner: null,
};

export function playersReducer(state = initialState, action) {
  switch(action.type) {
    case types.START:
      return {
        ...initialState,
        ...action.payload, //players, playerInfo, currentPlayer, start, gameType
      };
    case types.PLAY:
      return {
        ...initialState,
        players: [...state.players],
        playerInfo: {...state.playerInfo},
        playHistory: [...state.playHistory],
        gameType: state.gameType,
        start: state.start,
        currentPlayer: action.payload.currentPlayer,
      };
    case types.HOLD_ON:
      return {
        ...initialState,
        players: [...state.players],
        playerInfo: {...state.playerInfo},
        playHistory: [...state.playHistory],
        gameType: state.gameType,
        start: state.start,
        currentPlayer: state.currentPlayer,
        isHoldOn: true,
      };
    case types.PICK_TWO:
      return {
        ...initialState,
        players: [...state.players],
        playerInfo: {...state.playerInfo},
        playHistory: [...state.playHistory],
        gameType: state.gameType,
        start: state.start,
        currentPlayer: state.currentPlayer,
        isPickTwo: true,
      };
    case types.GENERAL_MARKET:
      return {
        ...initialState,
        players: [...state.players],
        playerInfo: {...state.playerInfo},
        playHistory: [...state.playHistory],
        gameType: state.gameType,
        start: state.start,
        currentPlayer: state.currentPlayer,
        isGeneralMarket: true,
      };
    case types.LAST_CARD:
      return {
        ...state,
        isLastCard: true,
      };
    case types.GENERAL_MARKET:
      return {
        ...initialState,
        players: [...state.players],
        playerInfo: {...state.playerInfo},
        playHistory: [...state.playHistory],
        gameType: state.gameType,
        currentPlayer: state.currentPlayer,
        winner: action.payload.winner,
        finish: true,
      };
    default:
      return {
        ...state,
      };
  }
}
