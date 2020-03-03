import React, { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import "./TransactionList.scss";
import TransactionsSet from "./TransactionsSet";

const TransactionList = () => {
  const { transactions, setTransactions } = useContext(TransactionsContext);
  const transactionsList = transactions.sort((a, b) => b.date - a.date);

  const handleDelete = id => {
    setTransactions(() => {
      return transactions.filter(transaction => transaction.id !== id);
    });
  };

  return (
    <div id="transaction-list">
      <h2>Lista transakcji</h2>
      <TransactionsSet
        transSet={transactionsList}
        transToDelete={handleDelete}
      />
    </div>
  );
};

export default TransactionList;
