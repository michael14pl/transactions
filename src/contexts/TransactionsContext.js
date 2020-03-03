import React, { createContext, useEffect, useState } from "react";

export const TransactionsContext = createContext();

const TrasactionsContextProvider = props => {
  const [transactions, setTransactions] = useState(() => {
    return localStorage.getItem("transactions")
      ? JSON.parse(localStorage.getItem("transactions"))
      : [
          { name: "Rachunek za telefon", amount: "8.43", id: 1, date: 1 },
          { name: "Wyjście do kina", amount: "12.02", id: 2, date: 2 },
          { name: "Bilet autobusowy", amount: "0.81", id: 3, date: 3 }
        ];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {props.children}
    </TransactionsContext.Provider>
  );
};
export default TrasactionsContextProvider;
