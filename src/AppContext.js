// AppContext.js

import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const DataProvider = ({ children }) => {
    const [selectedLng, setSelectedLng] = useState(1);

    const changeLanguage = (index) => {
        setSelectedLng(index);
    };

    return (
        <AppContext.Provider value={{ selectedLng, changeLanguage }}>
            {children}
        </AppContext.Provider>
    )
};

// export default {AppContext,DataProvider};