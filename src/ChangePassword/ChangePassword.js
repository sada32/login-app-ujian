import React from "react";
import {Formik} from "formik";
import * as yup from "yup";
import {Button, Col, Container, Form, Navbar, NavDropdown, Row} from "react-bootstrap";
import { getAuth, updatePassword } from "firebase/auth";
import {toast} from "react-toastify";
import FormTextField from "../components/form/form";
import {useNavigate} from "react-router-dom";

const loginSchema = yup.object().shape({
    password: yup.string().min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol').required('Password harus di isi!'),
});

const ChangePassword = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('user');

    const handleSubmit = (value) => {
        const {password} = value
        const auth = getAuth();
        updatePassword(auth.currentUser, password).then(() => {
            toast.success("Berhasil mengubah password")
            localStorage.clear();
            navigate('/');
        }).catch((error) => {
            toast.error(error.message)
        });
    }

    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/dashboard">Ujian Web Application</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavDropdown title={user} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/change-password">Ubah Password</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Log out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="global-container">
                <div className="col-md-4 container-login p-5">
                    <h4 className="text-white">Ubah Password</h4>
                    <Row className="mt-5">
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
                                                controlId="validationFormiOldPassword"
                                                label="Password Lama"
                                                type="password"
                                                name="oldPassword"
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
                                                disabled={!isValid || isSubmitting}
                                                as="input"
                                                className="button-submit px-5"
                                                size="lg"
                                                type="submit"
                                                value="Ubah Password"
                                            />
                                        </Col>

                                    </Form>
                                )}
                            </Formik>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>

    );
}

export default ChangePassword;
