import { request } from '../utils/axios';

export const getWalletAnalysis = async (id) => {
  try {
    const res = await request.get(`/compliance/v1/aml/wallet/${id}`);
    return res?.data;
  } catch (error) {
    const err = error?.response?.data?.message || error?.message;
    throw new Error(err);
  }
};

export const amlReqSingleTX = async (data) => {
  try {
    const res = await request.post(
      `/compliance/${process.env.REACT_APP_ONEL_VERSION}/aml/txn/single`,
      data
    );
    return res?.data;
  } catch (error) {
    const err = error?.response?.data?.message || error?.message;
    throw new Error(err);
  }
};

export const amlReqSingleWalletTX = async (data) => {
  try {
    const res = await request.post(
      `/compliance/${process.env.REACT_APP_ONEL_VERSION}/aml/wallet/single`,
      data
    );
    return res?.data;
  } catch (error) {
    const err = error?.response?.data?.message || error?.message;
    throw new Error(err);
  }
};
export const amlReqBatchWalletTX = async (data) => {
  try {
    const res = await request.post(
      `/compliance/${process.env.REACT_APP_ONEL_VERSION}/aml/wallet/batch`,
      data
    );
    return res?.data;
  } catch (error) {
    const err = error?.response?.data?.message || error?.message;
    throw new Error(err);
  }
};
