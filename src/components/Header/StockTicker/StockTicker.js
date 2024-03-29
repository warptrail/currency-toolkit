import React, { useEffect, useState } from 'react';

import TickerInfo from './TickerInfo';
import Slider from 'react-slick';

// Import css files
import './StockTicker.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    }
  }

  useEffect(() => {
    getTickers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ! Test Console Logs
  console.log(tickerData);

  // How to read an object in local storage
  // console.log(localStorage.getItem('foo'));

  // Get the values

  function mapStocks() {
    if (tickerData) {
      return tickerData.map((ticker) => {
        const tickerName = ticker.ticker;
        const tickerOpen = ticker.results[0].o.toFixed(2);
        const tickerClose = ticker.results[0].c.toFixed(2);
        const tickerChangeDollars = (tickerClose - tickerOpen).toFixed(2);
        const tickerChangeDollarsFormat = Math.abs(tickerChangeDollars);
        const tickerChangePercent = (
          (Math.abs(tickerClose - tickerOpen) / tickerClose) *
          100
        ).toFixed(2);
        let plusOrMinus;
        if (tickerChangeDollars < 0) {
          plusOrMinus = 'red';
        } else {
          plusOrMinus = 'green';
        }
        console.log(tickerChangeDollarsFormat);
        return (
          <TickerInfo
            key={tickerName}
            name={tickerName}
            close={tickerClose}
            changeDollars={tickerChangeDollars}
            changeDollarsFormat={tickerChangeDollarsFormat}
            changePercent={tickerChangePercent}
            plusOrMinus={plusOrMinus}
          />
        );
      });
    } else {
      return <span>Ticker Data Loading...</span>;
    }
  }

  const settings = {
    dots: false,
    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
    className: 'slides',
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 456,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="inner_bevel">
      <div className="stock_ticker">
        <Slider {...settings}>{mapStocks()}</Slider>
      </div>
    </div>
  );
}
