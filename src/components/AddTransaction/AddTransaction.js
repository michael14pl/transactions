import React, { Component } from 'react';
import './AddTransaction.scss';
import { connect } from 'react-redux';
import { addTransfer } from '../../actions/TransferAction';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const formValidation = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Podany tytuł jest za krótki')
        .max(150, 'Przekroczony limit znaków')
        .required('Podaj tytuł transakcji'),
    amount: Yup.number()
        .moreThan(0, 'Podana kwota wynosi: 0 lub jest ujemna')
        .required('Podaj kwotę')
        .typeError('Podany znak nie jest cyfrą')
})


class AddTransaction extends Component {

    handleSubmit = (values) => {
        this.props.addTransfer(values.name, values.amount);
        document.getElementById('add-transaction-fornik-form').reset();
    }

    render() {
        return (
            <div id="add-trasaction">
                <h2>Dodaj nową transakcję</h2>
                <Formik
                    initialValues={{ name: '', amount: '', }}
                    validationSchema={formValidation}
                    onSubmit={(values) => { this.handleSubmit(values) }}>
                    {({ errors, touched }) => (
                        <Form id="add-transaction-fornik-form">
                            <div className="inputs">
                                <div className="input-content">
                                    <Field type="text" name="name" placeholder="nazwa transakcji..." />
                                    {(errors.name && touched.name) &&
                                        <div className="input-title-errors">{errors.name}</div>
                                    }
                                </div>
                                <div className="input-content">
                                    <Field className="currency" name="amount" type="text" placeholder="EUR" />
                                    {(errors.amount && touched.amount) &&
                                        <div className="input-eur-errors">{errors.amount}</div>
                                    }
                                </div>
                            </div>
                            <div className="input-content">
                                <button type="submit">Zapisz</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTransfer: (name, amount) => dispatch(addTransfer(name, amount))
    }
}


export default connect(null, mapDispatchToProps)(AddTransaction);