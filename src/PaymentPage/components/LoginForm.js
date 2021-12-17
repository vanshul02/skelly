import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { AuthContext } from '../../shared/context/auth-context';
import Input from '../../shared/components/util/Input';
import Button from '../../shared/components/FormElements/Button/Button';
import './LoginForm.css';



const LoginForm = props => {
    const auth = useContext(AuthContext);
    const loginvalidate = Yup.object({
        email: Yup.string()
            .email("Invalid E-Mail Id")
            .required("Required Field"),
        password: Yup.string()
            .min(6, "Invalid Password")
            .required("Password cannot be empty!")
    });
    return (
        <Formik
            enableReinitialize
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={loginvalidate}
            onSubmit={values => {
                auth.login();
                console.log(values);
            }}
        >
            {formik => (
                <div className='login-form__wrapper'>
                    <Form>
                        <Input type="text" name="email" key="email" placeholder="Email" />
                        <Input type="password" name="password" key="password" placeholder="Password" />
                        <div className='modal-buttons'>
                            <Button type="submit" disabled={!(formik.isValid && formik.dirty)}>LOGIN</Button>
                            <Button inverse onClick={props.onCancel}>CANCEL</Button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default LoginForm
