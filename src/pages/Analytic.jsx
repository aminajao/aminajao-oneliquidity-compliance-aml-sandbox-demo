import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { getWalletAnalysis } from '../services';

export const Analytic = () => {
  const [error, setError] = useState('');
  const [response, setResponse] = useState();
  let { analysisId } = useParams();

  console.log(response, 'eeeeee');

  useEffect(() => {
    async function getAnalysisData() {
      try {
        const response = await getWalletAnalysis(analysisId);
        setResponse(response);
      } catch (error) {
        console.log(error);
      }
    }
    getAnalysisData();
  }, [analysisId]);

  return (
    <Container>
      <Navbar />
      <div>
        <p>Analysed At - {response?.data?.analysedAt}</p>
        <h1>Risk Score - {response?.data?.riskScore || '0'}</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3>{response?.data?.currency}</h3>
          <p style={{ fontWeight: 'bold', color: 'gray', fontSize: '24px' }}>
            {response?.data?.address}
          </p>
        </div>
        <div>{JSON.stringify(response?.data?.contributions)}</div>
        <h1 className="error">{error}</h1>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  margin: 20px 30%;

  .error {
    color: red;
    position: absolute;
    right: 0;
  }

  p {
    font-size: 20px;
  }
  h1 {
    font-size: 52px;
  }
  h3 {
    margin-right: 20px;
    font-size: 28px;
  }
`;
