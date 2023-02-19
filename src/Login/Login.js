import React from "react";
import {Formik} from "formik";
import * as yup from "yup";
import {Button, Col, Form, Row} from "react-bootstrap";
import FormTextField from "../components/form/form";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {Auth} from "../config/firebase";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const loginSchema = yup.object().shape({
    username: yup.string().required('Email harus di isi!'),
    password: yup.string().min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol').required('Password harus di isi!'),
});

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = (value) => {
        const { username, password } = value
        const email = username
        signInWithEmailAndPassword(Auth, email, password)
            .then(res => {
                toast.success("Berhasil masuk")
                navigate('/dashboard')
                localStorage.setItem('user', res.user.email)
                localStorage.setItem('uid', res.user.uid)
                window.location.reload();
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    return (
        <div className="global-container">
            <div className="col-md-4 container-login p-5">
                <img className="my-2" width="100px" src="/images/icon-person.png" alt="Icon Person"/>
                <h4 className="text-white">Login</h4>
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
                                    <Col className="mt-3">
                                        <Row>
                                            <Col className="text-lg-start">
                                                <Form.Group>
                                                    <Form.Check
                                                        required
                                                        className="text-white"
                                                        name="terms"
                                                        label="Remember me"
                                                        // onChange={handleChange}
                                                        id="validationFormik0"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="align-content-end text-lg-end">
                                                <Link to="/forgot-password"><span className="text-white text-decoration-underline" >Forget Password?</span></Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className="my-4">
                                        <Button
                                            disabled={!isValid}
                                            as="input"
                                            className="button-submit px-5"
                                            size="lg"
                                            type="submit"
                                            value="Login"
                                        />
                                    </Col>
                                    <Col className="my-4">
                                        <span className="text-white">Belum memiliki akun? <Link to={"/register"}><span className="text-white text-decoration-underline" >Daftar disini</span></Link></span>
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

export default Login;
