import React, { createContext, useReducer, useEffect } from 'react';
import { transactionsReducer } from '../reducers/transactionsReducer';

export const TransactionsContext = createContext();

const TrasactionsContextProvider = (props) => {
    const [transactions, dispatch] = useReducer(transactionsReducer, [], () => {
        const localData = localStorage.getItem('trans');
        return localData ? JSON.parse(localData) : [
            { name: "Rachunek za telefon", amount: "8.43", id: 1, date: 1 },
            { name: "Wyjście do kina", amount: "12.02", id: 2, date: 2 },
            { name: "Bilet komunikacji miejskiej", amount: "0.81", id: 3, date: 3 }]
    });
    useEffect(() => {
        localStorage.setItem('trans', JSON.stringify(transactions))
    }, [transactions])
    return (
        <TransactionsContext.Provider value={{ transactions, dispatch }}>
            {props.children}
        </TransactionsContext.Provider>
    )
}

export default TrasactionsContextProvider;