import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteTransfer } from '../../actions/TransferAction';
import { euroConverter } from '../../functions/euroConverter';
import './TransactionList.scss';


const TransactionList = ({ transactions, pln, deleteTransfer }) => {
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
                                <span className="second"> {euroConverter(transaction.amount, pln)}</span>
                                <span className="third icon"><FontAwesomeIcon icon="trash" onClick={() => { deleteTransfer(transaction.id) }} /></span>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        transactions: state.transactions.transactions,
        pln: state.transactions.pln
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTransfer: (id) => { dispatch(deleteTransfer(id)) },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);