import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { StockChartProps } from "../types/types";

const StockChart = ({ data, type, currency, label }: StockChartProps) => {
  const chartOptions = {
    chart: {
      type,
      height: "45%",
      backgroundColor: "#f5f5f5",
    },
    rangeSelector: {
      selected: 1,
    },
    title: {
      text: label,
    },
    yAxis: {
      opposite: false,
      title: {
        text: `Currency: ${currency}`,
      },
    },
    series: [
      {
        type,
        name: "Stock Price",
        data: data,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType="stockChart"
      options={chartOptions}
    />
  );
};

export default StockChart;
