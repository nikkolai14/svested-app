import React, {useState, useEffect} from "react";
import {
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';
import UserService from '../services/UserService'
import { history } from "react-router-guard";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        if (form.checkValidity()) {
            setDisabled(true);

            const data = {username, password};
            UserService.signup(data)
                .then(response => {
                    const token = response.data.token;
                    window.localStorage.setItem('svested_token', token);

                    history.push("/");
                })
                .catch(error => console.error(error))
        } else {
            setValidated(true);
        }
    }

    useEffect(() => {
        const token = window.localStorage.getItem('svested_token');
        if (token) {
            history.push("/");
        }
    })

    return (
        <div className="row justify-content-center align-items-center">
            <h1 className="text-center mt-5">Sign In</h1>

            <Row>
                <Col>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            required
                            type="email"
                            value={username}
                            onChange={(e) => setUsername(e.currentTarget.value)} 
                            placeholder="Enter username as email" 
                         />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            placeholder="Password"
                        />
                      </Form.Group>

                      <Button disabled={disabled} variant="primary" type="submit">
                        Sign In 
                      </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Signup;
