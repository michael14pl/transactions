import React, { useContext } from 'react';
import './TransactionSum.scss';
import { TransactionsContext } from '../../contexts/TransactionsContext';


const TransactionSum = () => {

    const { transactions } = useContext(TransactionsContext);

    return (
        <div id="transaction-sum">
            {transactions.length !== 0 ?
                <h2>Suma transakcji: {transactions.length}</h2>
                :
                <h2>Obecnie nie posiadasz żadnych transakcji</h2>
            }
            <span id="signature">Created by <a href="https://michal-kawa.herokuapp.com" target="_blank" rel="noopener noreferrer">Michał Kawa</a></span>
        </div>
    )
}


export default TransactionSum;