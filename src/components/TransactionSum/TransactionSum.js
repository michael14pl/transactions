import React from 'react';
import { connect } from 'react-redux';
import './TransactionSum.scss';


const TransactionSum = ({ transactions }) => {
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

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions.transactions
    }
}

export default connect(mapStateToProps)(TransactionSum);