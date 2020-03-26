import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Switch, FormGroup, makeStyles } from '@material-ui/core/';


const useStyle = makeStyles({
    root: {
        justifyContent: 'space-between'
    }
});

export default ({ options, register }) => {
    const classes = useStyle();
    const defaultCheked = {};
    options.map(item => Object.assign(defaultCheked, { [item.name]: true }));
    const [checked, setChecked] = useState(defaultCheked);
    const handleChange = event => {
        setChecked({ ...checked, [event.target.name]: !checked[event.target.name] });
    };

    return (
        <FormGroup>
            {
                options.map(question => {
                    const { name, label } = question;
                    return (<FormControlLabel
                        className={classes.root}
                        control={
                            <Switch
                                checked={checked[name]}
                                onChange={handleChange}
                                name={name}
                                color="primary"
                                inputRef={register}
                            />
                        }
                        label={label}
                        labelPlacement="start"
                    />);
                })
            }
        </FormGroup>
    );
};
