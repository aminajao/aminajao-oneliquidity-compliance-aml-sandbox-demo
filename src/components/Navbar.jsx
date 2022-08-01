import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Container>
      <a href="/">Aminajao+1L-AML</a>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  margin-bottom: 40px;
  margin-top: 20px;
  a {
    text-decoration: none;
    color: #7b61ff;
    font-weight: bold;
    font-size: 20px;
  }
`;
