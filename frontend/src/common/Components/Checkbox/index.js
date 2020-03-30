import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

export default ({ options, required, register, title }) => {
    const classes = useStyles();
    const defaultCheked = {};
    options.map(item => Object.assign(defaultCheked, { [item.name]: false }));
    const [state, setState] = React.useState(defaultCheked);

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (

        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">{title}</FormLabel>
                <FormGroup>
                    {options.map(item => {
                        const { name, label } = item;
                        return (<FormControlLabel
                            control={<Checkbox
                                size='small'
                                checked={state[name]}
                                onChange={handleChange}
                                inputRef={register({ required })}
                                name={name} />}
                            label={label}
                        />);
                    })}
                </FormGroup>
            </FormControl>
        </div>
    );
};
