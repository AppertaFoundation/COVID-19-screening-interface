import { useReducer, useCallback } from 'react';
import axios from 'axios';
import reducer, { initialState } from './reducer';
import { fetching, success, error } from './actionCreators';

const useApiRequest = (endpoint, { verb = 'get', params = {} } = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   debugger;
  const makeRequest = useCallback(async () => {
    dispatch(fetching());
    try {
      const response = await axios[verb](endpoint, params);
      dispatch(success(response));
    } catch (e) {
      dispatch(error(e));
    }
  }, [endpoint, verb, params]);

  return [state, makeRequest];
};

export default useApiRequest;
