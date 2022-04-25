import React from 'react';
import Container from 'react-bootstrap/Container';

function Auth(props) {
  const { children } = props;

  return (
    <Container>
      {children}
    </Container>
  );
}

export default Auth;
