import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Landing = () => {
  return (
    <Container>
      <Navbar />
      <h1>AML/CFT</h1>
      <div>
        <a className="btn" href="/aml/txn/single">
          Transaction hash AML/CFT analysis
        </a>
        <a className="btn" href="/aml/wallet/single">
          Wallet address AML/CFT analysis
        </a>
        <a className="btn" href="/aml/wallet/batch">
          Batch wallet addresses for AML/CFT analysis
        </a>
      </div>
    </Container>
  );
};

export default Landing;

const Container = styled.div`
  margin: 20px 35%;

  h1 {
    font-size: 40px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    a.btn {
      width: 100%;
      border: none;
      text-decoration: none;
      cursor: pointer;
      padding: 20px 30px;
      margin-top: 10px;
      font-size: 18px;
      border-radius: 4px;
      background: linear-gradient(to right, #7b61ff, #9b82ff);
      color: #ffffff;
    }
  }
`;
