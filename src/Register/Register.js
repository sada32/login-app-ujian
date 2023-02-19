import React from "react";
import {Formik} from "formik";
import * as yup from "yup";
import {Button, Col, Form, Row} from "react-bootstrap";
import FormTextField from "../components/form/form";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {toast} from "react-toastify";
import {Auth} from "../config/firebase";

const loginSchema = yup.object().shape({
    username: yup.string().required('Email harus di isi!'),
    password: yup.string().min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol').required('Password harus di isi!'),
});


const Register = () => {

    const handleSubmit = (e) => {
        debugger
        const {username, password} = e
        const email = username;
        createUserWithEmailAndPassword(Auth, email, password).then((authUser) => {
            debugger
            localStorage.setItem('uid', authUser.user.uid)
            toast.success('Pendaftaran berhasil, silahkan login!!')
            window.location.reload();
        }).catch((error) => alert(error.message));
    }

    return (
        <div className="global-container">
            <div className="col-md-4 container-login p-5">
                <img className="my-2" width="100px" src="/images/icon-person.png" alt="Icon Person"/>
                <h4 className="text-white">Register</h4>
                <Row className="mt-3">
                    <Col>
                        <Formik
                            validationSchema={loginSchema}
                            onSubmit={(values) => handleSubmit(values)}
                            initialValues={{
                                firstName: '',
                                password: '',
                            }}
                        >
                            {({
                                  handleSubmit,
                                  isValid,
                                  isSubmitting
                              }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Col>
                                        <FormTextField
                                            controlId="validationFormikUsername"
                                            label="Username"
                                            type="text"
                                            name="username"
                                        />
                                    </Col>
                                    <Col className="mt-3">
                                        <FormTextField
                                            controlId="validationFormikPassword"
                                            label="Password"
                                            type="password"
                                            name="password"
                                        />
                                    </Col>
                                    <Col className="my-4">
                                        <Button
                                            as="input"
                                            className="px-5"
                                            size="lg"
                                            variant="dark"
                                            type="submit"
                                            value="Register"
                                        />
                                    </Col>

                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Register;
