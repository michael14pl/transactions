import React, { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import TransactionsSet from "../TransactionList/TransactionsSet";
import "./TopTransaction.scss";

const TopTransaction = () => {
  const { transactions } = useContext(TransactionsContext);
  const topTransactions = transactions
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 3);

  return (
    <div id="top-transaciton">
      <h2>Top-3 bierzących transakcji</h2>
      <TransactionsSet transSet={topTransactions} transToDelete={null} />
    </div>
  );
};

export default React.memo(TopTransaction);
