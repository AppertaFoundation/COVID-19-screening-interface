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
      return { ...initialState, status: FETCHING, loading: true, error: null };
    case SUCCESS:
      return { ...state, status: SUCCESS, response, loading: false, error: null };
    case ERROR:
      return { ...state, status: ERROR, error: response.response.data.detail, loading: false };
    default:
      return state;
  }
};

export default reducer;
