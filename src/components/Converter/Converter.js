import React, { useContext } from "react";
import { ConverterContext } from "../../contexts/ConverterContext";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Converter.scss";

const formValidation = Yup.object().shape({
  pln: Yup.number()
    .moreThan(0, "Podana kwota wynosi 0 lub jest ujemna")
    .typeError("Podany znak nie jest cyfrą")
});

const Converter = () => {
  let { pln, setPln } = useContext(ConverterContext);

  const handleSubmit = values => {
    setPln(parseFloat(values.pln).toFixed(2));
    document.getElementById("coverter-fornik-form").reset();
  };

  return (
    <div>
      <div id="head">
        <h1>Transakcje walutowe</h1>
      </div>
      <div id="converter">
        <span>1 EUR = </span>
        <Formik
          initialValues={{ pln: "" }}
          validationSchema={formValidation}
          onSubmit={values => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form id="coverter-fornik-form">
              <Field id="a" name="pln" type="text" placeholder={`${pln} PLN`} />
              {errors.pln && touched.pln && (
                <div className="errors-pln">{errors.pln}</div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Converter;
