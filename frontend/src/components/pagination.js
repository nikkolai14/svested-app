import React, {useState, useEffect} from 'react';
import {
    Row,
    Col,
    Button
} from 'react-bootstrap';

function Pagination({onPageChange}) {
  const [page, setPage] = useState(1);
  const [paginationClicked, setPaginationClicked] = useState(false);

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
          onPageChange(page);
          setPaginationClicked(false);
      } 
  }, [page, paginationClicked])

  return (
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
  );
}

export default Pagination;
