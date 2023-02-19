import React, {useRef} from "react";
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import emailjs from '@emailjs/browser'
import {toast} from "react-toastify";
import password from 'secure-random-password'
import {useNavigate} from "react-router-dom";

const ChangePassword = () => {
    const form = useRef();
    const navigate = useNavigate()
    const serviceId = 'service_edkqgll'
    const templateId = 'template_zcvklq5'
    const userId = 'yl3YSJ8TXme_4FreF'
    const pass = password.randomPassword()

    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(form.current)
        emailjs.sendForm(serviceId, templateId, form.current, userId).then(() => {
            toast.success("Check email untuk mengetahui passwordmu")
            navigate("/login");
        }, (error) => {
            toast.error(error)
        });
    }

    return (
        <div>
            <div className="global-container">
                <div className="col-md-4 container-login p-5">
                    <img className="my-2" width="100px" src="/images/icon-person.png" alt="Icon Person"/>
                    <h4 className="text-white">Ubah Password</h4>

                    <Row className="mt-3">
                        <Col>
                            <form ref={form} onSubmit={(e) => handleSubmit(e)}>
                                <Form.Group>
                                    <InputGroup>
                                        <InputGroup.Text><i className="bi bi-person-fill"/></InputGroup.Text>
                                        <Form.Control
                                            id="email"
                                            name= "email"
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="d-none">
                                    <InputGroup>
                                        <InputGroup.Text><i className="bi bi-person-fill"/></InputGroup.Text>
                                        <Form.Control
                                            id="new_password"
                                            name= "new_password"
                                            value={pass}
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Button
                                    as="input"
                                    className="button-submit px-5 mt-3"
                                    size="lg"
                                    type="submit"
                                    value="Kirim Email"
                                />
                            </form>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>

    );
}

export default ChangePassword;

