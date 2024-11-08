export type FormattedData = Array<
  [number, number] | [number, number, number, number, number]
>;

export type StockChartProps = {
  data: FormattedData;
  type: "line" | "candlestick";
  currency: string | null;
  label: string | null;
};

export type StockSearchProps = {
  onSelect: (
    ticker: string,
    country: string,
    currency: string,
    label: string
  ) => void;
};

export type StockData = {
  date: string;
  open: number;
  close: number;
  high: number;
  low: number;
};

export type AsyncSelectOptionsType = {
  label: string;
  value: string;
  country: string;
  currency: string;
};

export type StockOption = {
  Code: string;
  Name: string;
  Exchange: string;
  Currency: string;
};
