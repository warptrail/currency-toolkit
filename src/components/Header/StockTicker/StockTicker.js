import React, { useEffect, useState } from 'react';

import dayjs from 'dayjs';

import './StockTicker.css';

const GOLD_URL =
  'https://api.polygon.io/v2/aggs/ticker/C:XAUUSD/prev?unadjusted=true&apiKey=eNgqBP1AgBICpcF9y0MDx6XdeY106aLb';

const AAPL_URL =
  'https://api.polygon.io/v2/aggs/ticker/AAPL/prev?unadjusted=true&apiKey=eNgqBP1AgBICpcF9y0MDx6XdeY106aLb';

const SBUX_URL =
  'https://api.polygon.io/v2/aggs/ticker/SBUX/prev?unadjusted=true&apiKey=eNgqBP1AgBICpcF9y0MDx6XdeY106aLb';

const TSLA_URL =
  'https://api.polygon.io/v2/aggs/ticker/TSLA/prev?unadjusted=true&apiKey=eNgqBP1AgBICpcF9y0MDx6XdeY106aLb';

const BITCOIN_URL =
  'https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/prev?unadjusted=true&apiKey=eNgqBP1AgBICpcF9y0MDx6XdeY106aLb';

export default function StockTicker() {
  const [tickerData, setTickerData] = useState();
  const [tickerError, setTickerError] = useState(false);
  const [loadingTickers, setLoadingTickers] = useState(true);

  async function getTickers() {
    try {
      setLoadingTickers(true);
      const tickerDataLoader = [];

      const goldData = await fetch(GOLD_URL);
      const goldDataJson = await goldData.json();
      tickerDataLoader.push(goldDataJson);

      const appleData = await fetch(AAPL_URL);
      const appleDataJson = await appleData.json();
      tickerDataLoader.push(appleDataJson);

      const starbucksData = await fetch(SBUX_URL);
      const starbucksDataJson = await starbucksData.json();
      tickerDataLoader.push(starbucksDataJson);

      const teslaData = await fetch(TSLA_URL);
      const teslaDataJson = await teslaData.json();
      tickerDataLoader.push(teslaDataJson);

      const bitcoinData = await fetch(BITCOIN_URL);
      const bitCoinDataJson = await bitcoinData.json();
      tickerDataLoader.push(bitCoinDataJson);

      setTickerData(tickerDataLoader);
      localStorage.setItem('tickerData', tickerDataLoader);
      console.log(localStorage.getItem('tickerData'));
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingTickers(false);
    }
  }

  useEffect(() => {
    getTickers();
  }, []);

  console.log(tickerData);
  console.log(tickerError);
  console.log(dayjs());

  // How to read an object in local storage
  console.log(localStorage.getItem('foo'));

  return (
    <div className="stock_ticker">
      Stocks Stocks Stonks!
      <ul>{}</ul>
    </div>
  );
}
