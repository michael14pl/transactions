import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConverterContext } from "../../contexts/ConverterContext";

const TransactionsSet = ({ transSet, transToDelete }) => {
  const { pln } = useContext(ConverterContext);
  return (
    <ul>
      <li className="list-head">
        <span>Tytuł</span>
        <span className="first">EUR</span>
        <span className="second">PLN</span>
      </li>
      {transSet &&
        transSet.map(transaction => {
          return (
            <li key={transaction.id}>
              <span>{transaction.name}</span>
              <span className="first"> {transaction.amount}</span>
              <span className="second">
                {(transaction.amount * pln).toFixed(2)}
              </span>
              {transToDelete ? (
                <span className="third icon">
                  <FontAwesomeIcon
                    icon="trash"
                    onClick={() => transToDelete(transaction.id)}
                  />
                </span>
              ) : null}
            </li>
          );
        })}
    </ul>
  );
};

export default TransactionsSet;
