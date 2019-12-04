import React, { useContext } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import './Converter.scss';
import { ConverterContext } from '../../contexts/ConverterContext';


const formValidation = Yup.object().shape({
    pln: Yup.number()
        .moreThan(0, 'Podana kwota wynosi 0 lub jest ujemna')
        .typeError('Podany znak nie jest cyfrą')
})


const Converter = () => {

    let { pln, dispatch } = useContext(ConverterContext);

    const handleSubmit = (values) => {
        dispatch({ type: 'CHANGE_PLN_VALUE', pln: parseFloat(values.pln).toFixed(2) });
        document.getElementById('coverter-fornik-form').reset()
    }

    pln += " PLN"
    return (
        <div>
            <div id="head">
                <h1>Transakcje walutowe</h1>
            </div>
            <div id="converter">
                <span>1 EUR = </span>
                <Formik
                    initialValues={{ pln: '' }}
                    validationSchema={formValidation}
                    onSubmit={(values) => { handleSubmit(values) }}>
                    {({ errors, touched }) => (
                        <Form id="coverter-fornik-form">
                            <Field id="a" name="pln" type="text" placeholder={pln} />
                            {(errors.pln && touched.pln) &&
                                <div className="errors-pln">{errors.pln}</div>
                            }
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}


export default Converter;
