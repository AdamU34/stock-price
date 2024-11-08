import { useState, useMemo } from "react";
import { useFetchStockData } from "./hooks/useFetchStockData";
import { FormattedData, StockData } from "./types/types";
import StockSearch from "./components/StockSearch";
import StockChart from "./components/StockChart";
import "./App.css";

const App = () => {
  const [selectedTicker, setSelectedTicker] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const [chartType, setChartType] = useState<"line" | "candlestick">("line");

  const { data, isLoading, isError, error } = useFetchStockData(
    selectedTicker,
    selectedCountry
  );

  const toggleChartType = () => {
    setChartType((prevType) => (prevType === "line" ? "candlestick" : "line"));
  };

  const chartData: FormattedData = useMemo(() => {
    return (
      data?.map((point: StockData) =>
        chartType === "candlestick"
          ? [
              new Date(point.date).getTime(),
              point.open,
              point.high,
              point.low,
              point.close,
            ]
          : [new Date(point.date).getTime(), point.close]
      ) || []
    );
  }, [data, chartType]);

  const handleSelect = (
    ticker: string,
    country: string,
    currency: string,
    label: string
  ) => {
    setSelectedTicker(ticker);
    setSelectedCountry(country);
    setSelectedCurrency(currency);
    setSelectedLabel(label);
  };

  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>Stock Price Viewer</h2>
      <StockSearch onSelect={handleSelect} />

      <div className="Chart">
        {isLoading && <p>Loading stock data...</p>}
        {isError && <p>Error loading data: {error?.message}</p>}
        {chartData.length ? (
          <>
            <StockChart
              data={chartData}
              type={chartType}
              currency={selectedCurrency}
              label={selectedLabel}
            />
            <button onClick={toggleChartType} className="Button">
              Switch to {chartType === "line" ? "Candlestick" : "Line"} Chart
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default App;
