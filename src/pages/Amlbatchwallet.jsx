import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { amlReqBatchWalletTX } from '../services';
import { useNavigate } from 'react-router-dom';

export const Amlbatchwallet = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [response, setResponse] = useState();

  const navigate = useNavigate();

  const [data, setData] = useState({
    address: '3QR5NgfRByJAVQxcf9k7ELn4eAZV1zjoQo',
    network: 'bitcoin',
    currency: 'BTC',
  });

  const someData = [
    {
      address: '3QR5NgfRByJAVQxcf9k7ELn4eAZV1zjoQo',
      network: 'bitcoin',
      currency: 'BTC',
    },
    {
      address: '0xb063E99a040e7BC77FD3Aba946cD74F089b65cbf',
      network: 'ethereum',
      currency: 'ETH',
    },
  ];

  const handleChange = (e) => {
    setError('');
    setData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      if (data.address && data.network && data.currency) {
        const res = await amlReqBatchWalletTX([...someData, data]);
        setResponse(res);
      } else {
        setError('All fields are required');
      }
    } catch (error) {
      setError('There was a problem sending your aml request' || 'An error occured');
    }
    setLoading(false);
  };

  return (
    <Container>
      <Navbar />
      <a href="/">Go back</a>
      <h1>Create an AML Request</h1>
      <div>
        <h3>AML/CFT for batch wallet</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Address">Out Address</label>
            <input
              value={data.address}
              name="address"
              onChange={handleChange}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="Network">Network</label>
            <input
              value={data.network}
              name="network"
              onChange={handleChange}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="Currency">Currency</label>
            <input
              value={data.currency}
              name="currency"
              onChange={handleChange}
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
      <div style={{ marginTop: '50px' }}>
        {response?.data?.map(({ id, analysedAt, currency }) => {
          return (
            <div
              className="card"
              onClick={() => {
                navigate(`/aml/analysis/${id}`);
              }}
            >
              <p>Currency - {currency}</p>
              <h4>{id}</h4>
              <p>Analysed at - {analysedAt}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 35%;

  .card {
    border: 1px solid #352e2e28;
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 10px 15px;
    cursor: pointer;
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
