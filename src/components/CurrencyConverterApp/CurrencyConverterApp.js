import React, { useState, useEffect } from 'react';

import CurrencyRow from './CurrencyRow/CurrencyRow';

import './CurrencyConverterApp.css';

const BASE_URL =
  'http://api.exchangeratesapi.io/v1/latest?access_key=286bae3faff2ab83e0bb6e5e72a95386';

function CurrencyConverterApp() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [allRates, setAllRates] = useState({});

  // Fetch currency exchange rates
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setAllRates(data.rates);
        setCurrencyOptions([...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency('USD');
        setExchangeRate(data.rates['USD']);
      });
  }, []);

  // ! ======= The math =======
  let toAmount, fromAmount;

  if (fromCurrency === 'EUR') {
    if (amountInFromCurrency) {
      fromAmount = amount;
      toAmount = amount * exchangeRate;
    } else {
      toAmount = amount;
      fromAmount = amount / exchangeRate;
    }
  } else {
    // EUR is stuck as base currency, so everything must convert to EUR and then to new currency
    if (amountInFromCurrency) {
      fromAmount = parseFloat(amount);
      let fromAmountToEUR = fromAmount / allRates[fromCurrency];
      let convertToNewCurrency = fromAmountToEUR * allRates[toCurrency];
      toAmount = convertToNewCurrency;
    } else {
      toAmount = parseFloat(amount);
      let toAmountToEUR = toAmount / allRates[toCurrency];
      let convertToNewCurrency = toAmountToEUR * allRates[fromCurrency];
      fromAmount = convertToNewCurrency;
    }
  }

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <div>
      <div className="currency_converter_app">
        <h1>Currency Converter </h1>
        <CurrencyRow
          selectedCurrency={fromCurrency}
          currencyOptions={currencyOptions}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={handleFromAmountChange}
        />
        <div className="equals_sign">=</div>
        <CurrencyRow
          selectedCurrency={toCurrency}
          currencyOptions={currencyOptions}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={handleToAmountChange}
        />
      </div>
    </div>
  );
}

export default CurrencyConverterApp;
