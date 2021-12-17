import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


import RadioBtn from '../../shared/components/util/RadioBtn';
import './DelMethod.css';



const DelMethod = () => {
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
                    <div className='delivery-form'>
                        <RadioBtn name="delivery" val="$20" id="inpost" label="InPost &emsp; $20" />
                        <RadioBtn name="delivery" val="$12" id="dpd" label="dpd &emsp; $12" />
                        <RadioBtn name="delivery" val="$15" id="dhl" label="DHL &emsp; $15" />
                        <RadioBtn name="delivery" val="$10" id="fedex" label="FedEx &emsp; $10" />
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default DelMethod
