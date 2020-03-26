import React, { createContext, useState } from 'react';

export const NavContext = createContext({});

const NavProvider = ({ children }) => {

    const [navPath, setNavPath] = useState('/');
    const [history, setHistory] = useState(null);
    const setNavContext = value => {
        setNavPath(value);
        history.replace(value);
    };
    return (
        <NavContext.Provider value={{ navPath, setNavContext, history, setHistory }}>
            {children}
        </NavContext.Provider>
    );
};
export default NavProvider;
