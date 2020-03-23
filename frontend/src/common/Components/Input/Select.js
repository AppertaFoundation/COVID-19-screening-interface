import React, { useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '../Input/Input'

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
        setGender(event.target.value)
        setValue(name, event.target.value);
    };
    useEffect(() => {
        register({ name: name }, { required: required });
        return () => unregister(name); // unregister input after component unmount
    }, [register])

    return (
            <Input
                errors={errors}
                variant='outlined'
                id="select"
                onChange={handleChange}
                label={label}
                value={gender}
                name={name}
                select
                >
                {options && options.map(item => <MenuItem value={item.value}>{item.name}</MenuItem>
                )}
            </Input>
    );
}
