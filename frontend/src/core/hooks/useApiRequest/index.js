import { useReducer, useCallback } from 'react';
import reducer, { initialState } from './reducer';
import { fetching, success, error } from './actionCreators';
import axiosInstance from '../../context/authApi';

const useApiRequest = (endpoint, { verb = 'get', params = {} } = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const makeRequest = useCallback(async () => {
    dispatch(fetching());
    try {
      const response = await axiosInstance[verb](endpoint, params);
      dispatch(success(response));
    } catch (e) {
      dispatch(error(e));
    }
  }, [endpoint, verb, params]);

  return [state, makeRequest];
};

export default useApiRequest;
