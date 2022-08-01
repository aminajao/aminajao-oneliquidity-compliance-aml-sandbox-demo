import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { amlReqSingleWalletTX } from '../services';

export const Amlsinglewallet = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [response, setResponse] = useState();

  const [data, setData] = useState({
    address: '3QR5NgfRByJAVQxcf9k7ELn4eAZV1zjoQo',
    network: 'bitcoin',
    currency: 'BTC',
  });
  const handleChange = (e) => {
    setError('');
    setData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  // useEffect(() => {
  //   getWalletAnalysis('c85a4058-9266-435f-9a98-41d43e44d437');
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      if (data.address && data.network && data.currency) {
        const res = await amlReqSingleWalletTX(data);
        setResponse(res);
      } else {
        setError('All fields are required');
      }
    } catch (error) {
      setError(error?.message || 'An error occured');
    }

    setLoading(false);
  };

  return (
    <>
      <Container>
        <Navbar />
        <a href="/">Go back</a>
        <h1>Create an AML Request</h1>
        <div>
          <h3>AML/CFT for single wallet</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                onChange={handleChange}
                value={data.address}
                name="address"
              />
            </div>
            <div>
              <label htmlFor="Network">Network</label>
              <input
                onChange={handleChange}
                value={data.network}
                name="network"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="Currency">Currency</label>
              <input
                onChange={handleChange}
                value={data.currency}
                name="currency"
                type="text"
              />
            </div>
            <div>
              <button type="submit">
                {loading ? 'Loading......' : 'Submit'}
              </button>
            </div>
          </form>
          <h1 className="error">{error}</h1>
        </div>
      </Container>
      <div>{JSON.stringify(response?.data)}</div>
    </>
  );
};

const Container = styled.div`
  margin: 20px 35%;

  .error {
    color: red;
    position: absolute;
    right: 0;
  }
  a {
    text-decoration: none;
    color: #7b61ff;
    font-weight: bold;
  }
  h1 {
    padding-bottom: 20px;
  }
  form {
    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;

      label {
        margin-bottom: 10px;
      }
    }
    input,
    select {
      padding: 12px;
      font-size: 18px;
    }
    button {
      width: 100%;
      border: none;
      text-decoration: none;
      cursor: pointer;
      padding: 15px 30px;
      margin-top: 10px;
      font-size: 18px;
      border-radius: 4px;
      background: linear-gradient(to right, #7b61ff, #9b82ff);
      color: #ffffff;
    }
  }
`;
