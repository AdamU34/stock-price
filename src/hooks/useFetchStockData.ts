import { useQuery } from "react-query";
import { fetchStockData } from "../services/stockService";
import { StockData } from "../types/types";

export const useFetchStockData = (
  ticker: string | null,
  country: string | null
) => {
  return useQuery<StockData[], Error>(
    ["stockData", ticker, country],
    () => fetchStockData(ticker!, country!),
    {
      enabled: !!ticker,
      retry: 2,
      refetchOnWindowFocus: false,
    }
  );
};
