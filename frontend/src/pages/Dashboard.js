import React from "react";
import {
    Row,
    Col,
    Button
} from 'react-bootstrap';
import UserService from '../services/UserService'

const Dashboard = () => {
    return (
        <div className="row justify-content-center align-items-center">
            <h1 className="text-center mt-5">Dashboard</h1>

            <Row>
                <Col>
                    <div className="d-flex gap-3 justify-content-end">
                        <Button variant="success">Process</Button>{' '}
                        <Button variant="warning">Fetch</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
