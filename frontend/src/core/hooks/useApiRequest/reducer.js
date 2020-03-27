import { FETCHING, SUCCESS, ERROR } from './actionTypes';

export const initialState = {
  status: null,
  response: null,
  loading: false,
  error: null
};

const reducer = (state = initialState, { type, response } = {}) => {
  switch (type) {
    case FETCHING:
      return { ...initialState, status: FETCHING, loading: true };
    case SUCCESS:
      return { ...state, status: SUCCESS, response, loading: false };
    case ERROR:
      return { ...state, status: ERROR, error: response, loading: false };
    default:
      return state;
  }
};

export default reducer;
