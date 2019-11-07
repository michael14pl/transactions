import React from 'react';
import './TopTransaction.scss';
import { connect } from 'react-redux';
import { euroConverter } from '../../functions/euroConverter';



const TopTransaction = ({ transactionsSorted, pln }) => {
    return (
        <div id="top-transaciton">
            <h2>Top-3 transakcji tego miesiąca</h2>
            <ul>
                <li id="list-head">
                    <span >Tytuł</span>
                    <span className="second">EUR</span>
                    <span className="third">PLN</span>
                </li>
                {transactionsSorted &&
                    transactionsSorted.sort((a, b) => (b.amount - a.amount)).slice(0, 3).map(transaction => {
                        return (
                            <li key={transaction.id}>
                                <span>{transaction.name}</span>
                                <span className="second">{transaction.amount}</span>
                                <span className="third">{euroConverter(transaction.amount, pln)}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        transactionsSorted: state.transactions.transactionsSorted,
        pln: state.transactions.pln,
    }
}


export default connect(mapStateToProps)(TopTransaction);