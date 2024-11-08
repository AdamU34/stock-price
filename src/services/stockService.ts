import axios from "axios";

const token = import.meta.env.VITE_API_TOKEN;

export const fetchStockData = async (ticker: string, country: string) => {
  const response = await axios.get(
    `https://eodhd.com/api/eod/${ticker}.${country}?api_token=${token}&fmt=json`
  );
  return response.data;
};

export const searchStockTickers = async (query: string) => {
  const response = await axios.get(
    `https://eodhd.com/api/search/${query}?api_token=${token}&fmt=json`
  );
  return response.data;
};
