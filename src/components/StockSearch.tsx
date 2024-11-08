import AsyncSelect from "react-select/async";
import { useStockSearch } from "../hooks/useStockSearch";
import { StockSearchProps, AsyncSelectOptionsType } from "../types/types";

const StockSearch = ({ onSelect }: StockSearchProps) => {
  const loadOptions = useStockSearch();

  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      onChange={(option: AsyncSelectOptionsType | null) => {
        if (option) {
          onSelect(option.value, option.country, option.currency, option.label);
        }
      }}
      isClearable
      placeholder="Search for a stock ticker..."
    />
  );
};

export default StockSearch;
