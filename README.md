## App Overview

This Stock Price Viewer is an interactive app that allows users to search for stock tickers and view stock data history in a visually engaging format (either line or candlestick chart). The app is built using React, Highcharts, and React Query, and it provides a seamless user experience for exploring stock data.

## Flow of the App

### Search for Stock:
- The user begins by searching for a stock ticker (e.g., "AAPL" for Apple) using a search bar.
- The app fetches matching stock options from an external API based on the search query. This is handled by the StockSearch component, which displays a list of results with stock codes, names, and additional information like country and currency.

### Select a Stock:
- Once the user selects a stock from the search list, the app updates the display with the relevant stock data. The selected stock ticker, country, and currency are stored in the app’s state.

### Fetch Stock Data:
- After the stock is selected, the app automatically fetches stock price data of one year for that ticker and country from an external API using React Query. The data includes historical stock prices (open, high, low, close) over time.

### Display Data on a Chart:
- The stock data is displayed in a Highcharts stock chart, which can be toggled between a line chart and a candlestick chart. This gives users the ability to choose their preferred visualization format.
- The chart is automatically updated to reflect the selected stock's price over time, with the Y-axis showing the stock’s value in the selected currency (e.g., USD).

### Handle Loading and Errors:
- While the app is fetching the data, a loading message is displayed to the user.
- If there’s an error (e.g., the stock data cannot be fetched), an error message is shown to notify the user.

## Technologies Used
React & Typescript: For building the user interface and managing state.
Highcharts: For rendering interactive and customizable stock charts.
React-Query: For managing API requests and caching the stock data efficiently.
Axios: For making HTTP requests to fetch data from an external stock price API.
React-Select: For creating a customizable, searchable, and async-enabled dropdown component to select stock tickers.
