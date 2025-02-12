import React, { createContext, useState } from 'react';
import getState from './flux';

// Creao el contexto global
export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [state, setState] = useState(getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: updatedStore =>
            setStore({
                store: { ...state.store, ...updatedStore },
                actions: { ...state.actions }
            })
    }));

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
};