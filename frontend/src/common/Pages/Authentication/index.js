import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../core/context/AuthContext';

export default ({ history }) => {
  const { register, handleSubmit, errors } = useForm();
  const { setAuthData } = useContext(AuthContext);

  const onSubmit = data => {
    setAuthData(data.nhsNo);
    history.replace('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="nhsNo" ref={register({ required: true })} />
      {errors.nhhsNo && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};
