import React, { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./AddTransaction.scss";

const formValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, "Podany tytuł jest za krótki")
    .max(150, "Przekroczony limit znaków")
    .required("Podaj tytuł transakcji"),
  amount: Yup.number()
    .moreThan(0, "Podana kwota wynosi: 0 lub jest ujemna")
    .required("Podaj kwotę")
    .typeError("Podany znak nie jest cyfrą lub kropką")
});

const AddTransaction = () => {
  const { transactions, setTransactions } = useContext(TransactionsContext);

  const handleSubmit = values => {
    setTransactions(prevTransactions => [
      ...prevTransactions,
      {
        name: values.name,
        amount: parseFloat(values.amount).toFixed(2),
        id: require("shortid").generate(),
        date: Date.now()
      }
    ]);
    document.getElementById("add-transaction-fornik-form").reset();
  };

  return (
    <div id="add-trasaction">
      <h2>Dodaj nową transakcję</h2>
      <Formik
        initialValues={{ name: "", amount: "" }}
        validationSchema={formValidation}
        onSubmit={values => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form id="add-transaction-fornik-form">
            <div className="inputs">
              <div className="input-content">
                <Field
                  type="text"
                  name="name"
                  placeholder="nazwa transakcji..."
                />
                {errors.name && touched.name && (
                  <div className="input-title-errors">{errors.name}</div>
                )}
              </div>
              <div className="input-content">
                <Field
                  className="currency"
                  name="amount"
                  type="text"
                  placeholder="EUR"
                />
                {errors.amount && touched.amount && (
                  <div className="input-eur-errors">{errors.amount}</div>
                )}
              </div>
            </div>
            <div className="input-content">
              <button type="submit">Zapisz</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTransaction;
