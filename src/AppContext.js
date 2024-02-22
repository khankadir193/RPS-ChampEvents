// AppContext.js

import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const DataProvider = ({ children }) => {
    const [selectedLng, setSelectedLng] = useState(1);
    const [disableAll, setDisableAll] = useState(false);


    const changeLanguage = (index) => {
        setSelectedLng(index);
    };

    const handleDisableAll = (value) => {
        setDisableAll(value);
    };

    return (
        <AppContext.Provider value={{ selectedLng, changeLanguage,handleDisableAll,disableAll}}>
            {children}
        </AppContext.Provider>
    )
};

// export default {AppContext,DataProvider};