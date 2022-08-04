import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { amlReqSingleTX } from '../services';

export const Amlsingletxn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [response, setResponse] = useState();

  const [data, setData] = useState({
    outAddress: '3QR5NgfRByJAVQxcf9k7ELn4eAZV1zjoQo',
    network: 'bitcoin',
    hash: 'fa2556d60a8f1dfef9dbcc22b49f7333f14e21c13a28b79227d209faf9060614',
    currency: 'BTC',
    type: '',
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

  console.log(response);
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      if (
        data.outAddress &&
        data.network &&
        data.hash &&
        data.currency &&
        data.type
      ) {
        const res = await amlReqSingleTX(data);
        setResponse(res);
      } else {
        setError('All fields are required');
      }
    } catch (error) {
      console.log(error);
      setError('There was a problem sending your aml request' || 'An error occured');
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
          <h3>AML/CFT for single transaction</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Out Address">Out Address</label>
              <input
                name="outAddress"
                value={data.outAddress}
                onChange={handleChange}
                type="text"
              />
            </div>
            <div>
              <label htmlFor="network">Network</label>
              <input
                name="network"
                value={data.network}
                onChange={handleChange}
                type="text"
              />
            </div>
            <div>
              <label htmlFor="Hash">Hash</label>
              <input
                name="hash"
                type="text"
                value={data.hash}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="Currency">Currency</label>
              <input
                name="currency"
                type="text"
                onChange={handleChange}
                value={data.currency}
              />
            </div>
            <div>
              <select name="type" onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="source">Source</option>
                <option value="destination">Destination</option>
              </select>
            </div>
            <div>
              <button>{loading ? 'Loading......' : 'Submit'}</button>
            </div>
            <h1 className="error">{error}</h1>
          </form>
        </div>
      </Container>
      <div>{JSON.stringify(response?.data)}</div>
    </>
  );
};

const Container = styled.div`
  margin: 20px 35%;
  padding: 0 20px;

  @media only screen and (max-width: 900px) {
    margin: 20px 20%;
  }

  h1 {
    padding-bottom: 20px;
  }
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
