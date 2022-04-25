import React, {useState, useEffect} from "react";
import {
    Row,
    Col,
    Button,
    Alert
} from 'react-bootstrap';
import UserService from '../services/UserService'

const Dashboard = () => {
    const [datas, setDatas] = useState([]);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [noProcess, setNoProcess] = useState(false);
    const [page, setPage] = useState(1);
    const [paginationClicked, setPaginationClicked] = useState(false);
    
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
    
    const handleFetch = () => {
        UserService.fetch(page)
            .then(response => {
                if (response.data.datas.length) {
                    setNoProcess(true);
                    setDatas(response.data.datas);
                    setPaginationClicked(false);
                }
            })
            .catch(error => console.error(error))
    }

    const handlePagination = (isPrev) => {
        if (isPrev){
            setPage(page - 1)
        } else {
            setPage(page + 1)
        }

        setPaginationClicked(true);
    }

    useEffect(() => {
        if (page && paginationClicked) {
            handleFetch();
        } 
    }, [page, handleFetch, paginationClicked])

    return (
        <div className="row justify-content-center align-items-center">
            <h1 className="text-center mt-5">Dashboard</h1>

            <Row>
                <Col>
                    <div className="d-flex gap-3 justify-content-end">
                        <Button variant="success" disabled={noProcess} onClick={handleProcess}>Process</Button>
                        <Button variant="warning" onClick={handleFetch}>Fetch</Button>
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
                    <Row className="mt-5">
                        {datas.map((data, index) => 
                            <Col 
                                md={4} 
                                key={index}
                                className="text-center p-5"
                            >
                                {data.randAlphabet.toUpperCase()}
                            </Col>
                        )}
                    </Row>

                    <Row className="mt-3">
                        <Col>
                            Page {page}
                        </Col>
                        <Col>
                            <div className="d-flex gap-3 justify-content-end">
                                <Button disabled={page === 1} onClick={() => handlePagination(true)} variant="primary">Prev</Button>
                                <Button variant="primary" onClick={() => handlePagination(false)}>Next</Button>
                            </div>
                        </Col>
                    </Row>
                </>
            }
        </div>
    );
};

export default Dashboard;
