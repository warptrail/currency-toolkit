import React, { useEffect, useState } from 'react';

import './StockTicker.css';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime);
dayjs.extend(utc);

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
  const [dailyTickerFetch, setDailyTickerFetch] = useState();

  async function getTickers() {
    // ? =====================
    async function tickerFetch() {
      // the data gets staged in this array -->
      const tickerDataLoader = [];

      // five fetch calls to push in to the staging array
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

      // in case fetches pull errors, these variables will change
      let hasError = false;
      let errorMessage = 'no error';

      // scan the data staging array for errors
      tickerDataLoader.forEach((ticker) => {
        console.log(ticker);
        if (ticker.status === 'ERROR') {
          hasError = true;
          errorMessage = ticker.error;
          console.log('bad fetch');
        } else {
          console.log('good fetch');
        }
      });

      // set the state with the data or the error
      if (hasError) {
        setTickerData({
          error: errorMessage,
          message: 'refresh the page in 60 seconds',
        });
        localStorage.removeItem('tickerData');
      } else {
        setTickerData(tickerDataLoader);
        localStorage.setItem('tickerData', JSON.stringify(tickerDataLoader));
        localStorage.setItem('lastAPIFetchDate', dayjs().toISOString());
      }
    }
    // ? =====================

    // decide if data needs to come from local storage or fetch request
    try {
      const lastAPIFetchDate = dayjs(localStorage.getItem('lastAPIFetchDate'));
      const lsTickerData = JSON.parse(localStorage.getItem('tickerData'));
      const now = dayjs();

      if (lsTickerData) {
        if (now.diff(lastAPIFetchDate, 'hour') > 1) {
          tickerFetch();
        } else {
          setTickerData(lsTickerData);
        }
      } else {
        tickerFetch();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingTickers(false);
    }
  }

  useEffect(() => {
    getTickers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ! Test Console Logs
  console.log(tickerData);
  // console.log(dayjs(1622664000000).utc().format('MM/DD/YYYY - hh:mm a Z'));
  // const a = dayjs(1622664000000); // 1622678399999
  // const b = dayjs();
  // console.log(a.diff(b, 'hour'));
  // console.log(dayjs('1999-01-01').from(a));
  // console.log();

  // How to read an object in local storage
  // console.log(localStorage.getItem('foo'));

  // Get the values

  const testArr = ['stocks', 'gold', 'bitcoin', '🚜-🚜-🚜-🚜'];

  function mapStocks() {
    if (tickerData) {
      return tickerData.map((ticker) => {
        const tickerName = ticker.ticker;
        const tickerOpen = ticker.results[0].o;
        const tickerClose = ticker.results[0].c;
        const tickerChange = (
          ((tickerClose - tickerOpen) / tickerClose) *
          100
        ).toFixed(2);
        return <li key={tickerName}>{tickerChange} % </li>;
      });
    }
  }

  return (
    <div className="stock_ticker">
      <ul>{mapStocks()}</ul>
    </div>
  );
}
