import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { NavContext } from '../../../core/context/NavContext';

export default () => {
    const history = useHistory();
    const { setHistory } = useContext(NavContext);
    useEffect(() => {
        setHistory(history);
    });
    return <div>Tasks</div>;
};
