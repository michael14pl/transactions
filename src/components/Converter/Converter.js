import React, { Component } from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { euroCost } from '../../actions/TransferAction';
import { Formik, Form, Field } from 'formik';
import './Converter.scss';



const formValidation = Yup.object().shape({
    pln: Yup.number()
        .moreThan(0, 'Podana kwota wynosi: 0 lub jest ujemna')
        .typeError('Podany znak nie jest cyfrą')
})


class Converter extends Component {

    handleSubmit = (values) => {
        this.props.euroCost(values.pln);
        document.getElementById('coverter-fornik-form').reset()
    }

    render() {
        let pln = this.props.pln;
        pln += " PLN"
        return (
            <div>
                <div id="head">
                    <h1>Transakcje walutowe</h1>
                </div>
                <div id="converter">
                    <span>Konwerter: 1 EUR = </span>
                    <Formik
                        initialValues={{ pln: '' }}
                        validationSchema={formValidation}
                        onSubmit={(values) => { this.handleSubmit(values) }}>

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
}

const mapStateToProps = (state) => {
    return {
        pln: state.transactions.pln
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        euroCost: (pln) => { dispatch(euroCost(pln)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Converter);
