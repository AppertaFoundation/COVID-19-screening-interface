import React, { useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import uniqid from 'uniqid';
import Input from './Input';

export default ({
  options,
  label,
  name,
  required,
  register,
  unregister,
  setValue,
  errors
}) => {
  const [gender, setGender] = React.useState('');

  const handleChange = event => {
    setGender(event.target.value);
    setValue(name, event.target.value);
  };
  useEffect(() => {
    register({ name }, { required });
    return () => unregister(name); // unregister input after component unmount
  }, [register]);

  return (
    <Input
      errors={errors}
      variant="outlined"
      id="select"
      onChange={handleChange}
      label={label}
      value={gender}
      name={name}
      select
    >
      {options &&
        options.map(item => (
          <MenuItem key={uniqid()} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
    </Input>
  );
};
