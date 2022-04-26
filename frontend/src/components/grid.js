import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';

function Grid({datas}) {
  return (
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
  );
}

export default Grid;
