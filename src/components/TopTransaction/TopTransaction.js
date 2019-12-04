import React, { useContext } from 'react';
import './TopTransaction.scss';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { ConverterContext } from '../../contexts/ConverterContext';


const TopTransaction = () => {
    const { transactions } = useContext(TransactionsContext);
    const { pln } = useContext(ConverterContext);
    return (
        <div id="top-transaciton">
            <h2>Top-3 bierzących transakcji</h2>
            <ul>
                <li id="list-head">
                    <span >Tytuł</span>
                    <span className="second">EUR</span>
                    <span className="third">PLN</span>
                </li>
                {transactions &&
                    transactions.sort((a, b) => (b.amount - a.amount)).slice(0, 3).map(transaction => {
                        return (
                            <li key={transaction.id}>
                                <span>{transaction.name}</span>
                                <span className="second">{transaction.amount}</span>
                                <span className="third">{(transaction.amount * pln).toFixed(2)}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default TopTransaction;