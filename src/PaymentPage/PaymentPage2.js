import React, { useState, useContext } from 'react';
import { Formik, Form } from 'formik';
import { CountryDropdown } from 'react-country-region-selector';
import * as Yup from 'yup';

import Input from '../shared/components/util/Input';
import Button from '../shared/components/FormElements/Button/Button';
import PayMethod from './components/PayMethod';
import DelMethod from './components/DelMethod';
import Cart from './components/Cart';
import Modal from '../shared/components/UIElements/Modal/Modal';
import LoginForm from './components/LoginForm';
import { AuthContext } from '../shared/context/auth-context';
import './PaymentPage.css';

const PaymentPage = () => {
    const auth = useContext(AuthContext);
    const validate = Yup.object({
        fname: Yup.string()
            .min(2, "Please enter at least 2 characters!")
            .required("Required Field"),
        lname: Yup.string()
            .min(2, "Please enter at least 2 characters!")
            .required("Required Field"),
        address: Yup.string()
            .min(2, "Please enter at least 2 characters!")
            .required("Required Field"),
        city: Yup.string()
            .min(2, "Please enter at least 2 characters!")
            .required("Required Field"),
        pcode: Yup.string()
            .min(6, "Inavlid Postal Code!")
            .max(6, "Inavlid Postal Code!")
            .required("Required Field"),
        number: Yup.string()
            .min(10, "Inavlid Mobile Number")
            .max(10, "Inavlid Mobile Number")
            .required("Required Field"),
        email: Yup.string()
            .email("Invalid E-Mail Id")
            .required("Required Field"),
    });
    const [getCountry, setCountry] = useState("Poland");
    const [showLogin, setShowLogin] = useState(false);

    const showLoginModal = () => setShowLogin(true);
    const closeLoginModal = () => setShowLogin(false);

    const countryStyle = {
        border: "1px solid gray",
        margin: "10% 0 0 0",
        padding: "1rem",
        borderRadius: "40px",
        width: "103%",
        color: "gray",
        fontSize: "18px"
    };
    return (
        <Formik
            enableReinitialize
            initialValues={{
                fname: '',
                lname: '',
                email: '',
                address: '',
                city: '',
                pcode: '',
                number: '',
                country: 'Poland'
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {formik => (
                <React.Fragment>
                    <Modal
                        show={showLogin}
                        onCancel={closeLoginModal}
                        header="Log In"
                    >
                        <LoginForm onCancel={closeLoginModal} />
                    </Modal>
                    <div className='upper-text__wrapper'>
                        <h2>Shipping and Payment</h2>
                        <div className='right-upper-icons'>
                            <i className="uil uil-shopping-cart"></i>
                            <div className='gray-line'></div>
                            <i className="uil uil-truck"></i>
                        </div>
                    </div>
                    <div className="flex_content__wrapper">
                        <div className='shipping_info__wrapper'>
                            <div className='auth_portion'>
                                {!auth.isLoggedIn && <Button onClick={showLoginModal}> LOG IN </Button>}
                                {!auth.isLoggedIn && <Button inverse to="/signup"> SIGN UP </Button>}
                                {auth.isLoggedIn && <Button inverse onClick={auth.logout}> LOG OUT </Button>}
                            </div>
                            <h3>Shipping Information</h3>
                            <Form>
                                <div className='shipping_info__form'>
                                    <div className='shipping_info_lform'>
                                        <Input name="email" type="email" placeholder="Email" />
                                        <Input name="fname" type="text" placeholder="First name" />
                                        <Input name="lname" type="text" placeholder="Last name" />
                                        <Input name="number" type="text" placeholder="Phone number" />
                                    </div>
                                    <div className='shipping_info_rform'>
                                        <Input name="address" type="text" placeholder="Address" />
                                        <Input name="city" type="text" placeholder="City" />
                                        <Input name="pcode" type="text" placeholder="Postal Code/ Zip" />
                                        <CountryDropdown style={countryStyle} value={getCountry} onChange={(place) => setCountry(place)} />
                                    </div>

                                </div>
                            </Form>
                        </div>
                        <div className='payment_and_delivery__wrapper'>
                            <h3>Payment method</h3>
                            <PayMethod />
                            <h3>Delivery method</h3>
                            <DelMethod />
                        </div>
                        <div className="cart-info__wrapper">
                            <h3>Your cart</h3>
                            <Cart />
                            <div className='total-cost'><span>Total cost</span> &emsp;&emsp; $159,98</div>
                            <div className='free-shipping'>
                                <div className='truck-img'><i className="uil uil-truck"></i></div>
                                <p>You are <span>$30,02</span> away from free shipping!</p>
                            </div>
                        </div>
                    </div>
                    <div className='final-buttons__wrapper'>
                        <div className='back-button'><i className="uil uil-arrow-left"></i> <div>Back</div></div>
                        <div className='payment-buttons'>
                            <Button inverse> CONTINUE SHOPPING</Button>
                            <Button> PROCEED TO PAYMENT</Button>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </Formik >
    );
}

export default PaymentPage;
