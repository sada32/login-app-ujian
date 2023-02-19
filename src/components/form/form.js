import React from "react";
import {Form, InputGroup} from "react-bootstrap";
import {Field} from "formik";

const FormTextField = ({as, md, controlId, label, name, type, inputGroupPrepend}) => {
    return (
        <Field
            name={name}
            render={({field, form}) => {
                const isValid = !form.errors[field.name];
                const isInvalid = form.touched[field.name] && !isValid;
                return (
                    <Form.Group as={as} md={md} controlId={controlId}>
                        <InputGroup>
                            {inputGroupPrepend}
                            <InputGroup.Text>{type === "password" ? <i className="bi bi-lock-fill"/>:<i className="bi bi-person-fill"/>}</InputGroup.Text>
                            <Form.Control
                                {...field}
                                type={type}
                                placeholder={label}
                                isValid={form.touched[field.name] && isValid}
                                isInvalid={isInvalid}
                                feedback={form.errors[field.name]}
                            />

                            <Form.Control.Feedback type="invalid">
                                {form.errors[field.name]}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                );
            }}
        />
    );
};

FormTextField.defaultProps = {
    type: "text",
    inputGroupPrepend: null
};

export default FormTextField;
