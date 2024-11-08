import { useCallback } from "react";
import { searchStockTickers } from "../services/stockService";
import { AsyncSelectOptionsType, StockOption } from "../types/types";

export const useStockSearch = () => {
  return useCallback(
    async (inputValue: string): Promise<AsyncSelectOptionsType[]> => {
      if (!inputValue) return [];

      const data = await searchStockTickers(inputValue);

      return data.map((stock: StockOption) => ({
        label: `${stock.Code} - (${stock.Name})`,
        value: stock.Code,
        country: stock.Exchange,
        currency: stock.Currency,
      }));
    },
    []
  );
};
