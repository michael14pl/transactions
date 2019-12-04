import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TransactionList.scss';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { ConverterContext } from '../../contexts/ConverterContext';


const TransactionList = () => {
    const { transactions, dispatch } = useContext(TransactionsContext);
    const { pln } = useContext(ConverterContext);
    return (
        <div id="transaction-list">
            <h2>Lista transakcji</h2>
            <ul>
                <li id="list-head">
                    <span >Tytuł</span>
                    <span className="first">EUR</span>
                    <span className="second">PLN</span>
                    <span className="third"></span>
                </li>
                {transactions &&
                    transactions.sort((a, b) => b.date - a.date).map(transaction => {
                        return (
                            <li key={transaction.id}>
                                <span>{transaction.name}</span>
                                <span className="first" > {transaction.amount}</span>
                                <span className="second"> {(transaction.amount * pln).toFixed(2)}</span>
                                <span className="third icon"><FontAwesomeIcon icon="trash" onClick={() => dispatch({ type: 'DELETE_TRANSACTION', id: transaction.id })} /></span>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}

export default TransactionList;