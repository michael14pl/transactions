import React, { createContext, useReducer, useEffect } from 'react';
import { converterReducer } from '../reducers/converterReducer';


export const ConverterContext = createContext();


const ConverterContextProvider = (props) => {
    const [pln, dispatch] = useReducer(converterReducer, [], () => {
        const localPln = localStorage.getItem('pln');
        return localPln ? JSON.parse(localPln) : ['4.00']
    });
    useEffect(() => {
        localStorage.setItem('pln', JSON.stringify(pln))
    }, [pln])
    return (
        <ConverterContext.Provider value={{ pln, dispatch }}>
            {props.children}
        </ConverterContext.Provider>
    )
}

export default ConverterContextProvider