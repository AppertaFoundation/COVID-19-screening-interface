import { FETCHING, SUCCESS, ERROR } from './actionTypes';

export const initialState = {
  status: null,
  response: null
};

const reducer = (state = initialState, { type, response, exception } = {}) => {
  switch (type) {
    case FETCHING:
      return { ...initialState, status: FETCHING };
    case SUCCESS:
      return { ...state, status: SUCCESS, response };
    case ERROR:
      return { ...state, status: ERROR, response };
    default:
      return state;
  }
};

export default reducer;
