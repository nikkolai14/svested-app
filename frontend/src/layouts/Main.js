import React from 'react';
import Container from 'react-bootstrap/Container';

function Main(props) {
  const { children } = props;

  return (
    <Container fluid>
      {children}
    </Container>
  );
}

export default Main;
