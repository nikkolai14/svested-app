import React, {useState, useEffect} from "react";
import {
    Row,
    Col,
    Button,
    Alert
} from 'react-bootstrap';
import UserService from '../services/UserService'
import Grid from '../components/grid';
import Pagination from '../components/pagination';

const Dashboard = () => {
    const [datas, setDatas] = useState([]);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [noProcess, setNoProcess] = useState(false);
    
    const handleProcess = () => {
        UserService.process()
            .then(response => {
                if (response.data.state) {
                    setNoProcess(true);
                    setShowSuccessMsg(true);

                    setTimeout(() => {
                        setShowSuccessMsg(false);
                    }, 3000);
                }
            })
            .catch(error => console.error(error))
    }
    
    const handleFetch = (page = 1) => {
        UserService.fetch(page)
            .then(response => {
                if (response.data.datas.length) {
                    setNoProcess(true);
                    setDatas(response.data.datas);
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="row justify-content-center align-items-center">
            <h1 className="text-center mt-5">Dashboard</h1>

            <Row>
                <Col>
                    <div className="d-flex gap-3 justify-content-end">
                        <Button variant="success" disabled={noProcess} onClick={handleProcess}>Process</Button>
                        <Button variant="warning" onClick={() => handleFetch()}>Fetch</Button>
                    </div>
                </Col>
            </Row>

            {showSuccessMsg && 
                <Row>
                    <Col>
                        <Alert variant="success" className="mt-3">
                            Processed data successfully!
                        </Alert>
                    </Col>
                </Row>
            }

            {datas.length !== 0 && 
                <>
                    <Grid datas={datas} />

                    <Pagination onPageChange={(page) => handleFetch(page)} />
                </>
            }
        </div>
    );
};

export default Dashboard;
