import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


import './PayMethod.css';
import RadioBtn from '../../shared/components/util/RadioBtn';



const PayMethod = () => {
    const validate = Yup.object({
        payment: Yup.string()
            .required("Required Field")
    });
    return (
        <Formik
            enableReinitialize
            initialValues={{
                payment: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {formik => (
                <Form>
                    <div className='payment-form'>

                        <RadioBtn name="payment" val="paypal" id="paypal" label="PayPal" />
                        <RadioBtn name="payment" val="visa" id="visa" label="Visa" />
                        <RadioBtn name="payment" val="mastercard" id="mastercard" label="MasterCard" />


                        <RadioBtn name="payment" val="maestro" id="maestro" value="maestro" label="Maestro" />
                        <RadioBtn name="payment" val="discover" id="discover" value="discover" label="Discover" />
                        <RadioBtn name="payment" val="ideal" id="ideal" value="ideal" label="Ideal" />

                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default PayMethod
