import * as types from '../actions';

const initialState = {
  playersCards: {},
  marketArea: [],
  playArea: [],
};

export function boardReducer(state = initialState, action) {
  switch(action.type) {
    case types.START:
      return {
        ...initialState,
      };
    case types.SHOLVING:
      return {
        ...state,
        marketArea: action.payload.marketArea,
        playersCards: action.payload.playersCards,
      };
    case types.PLAY:
      return {
        ...state,
        playersCards: {
          ...state.playersCards,
          ...action.payload.playersCards,
        },
        marketArea: action.payload.marketArea,
      };
    case types.GO_MARKET:
      return {
        ...state,
        playersCards: {
          ...state.playersCards,
          ...action.payload.playersCards,
        },
        marketArea: action.payload.marketArea,
      };
    case types.GENERAL_MARKET:
      return {
        ...state,
        playersCards: {
          ...state.playersCards,
          ...action.payload.playersCards,
        },
        marketArea: action.payload.marketArea,
      };
    case types.PICK_TWO:
      return {
        ...state,
        playersCards: {
          ...state.playersCards,
          ...action.payload.playersCards,
        },
        marketArea: action.payload.marketArea,
      };
    default:
      return {
        ...state,
      };
  }
}
