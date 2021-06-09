import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import HomePage from './routes/HomePage/HomePage';
import CurrencyConverterPage from './routes/CurrencyConverterPage/CurrencyConverterPage';
import LocalStorageInput from './components/LocalStorageInput/LocalStorageInput';
import Footer from './components/Footer/Footer';

function App() {
  const [toggleLocalStorage, setToggleLocalStorage] = useState(false);

  // Toggle the local storage window
  const showLocalStorage = (e) => {
    setToggleLocalStorage(true);
  };
  const hideLocalStorage = (e) => {
    setToggleLocalStorage(false);
  };

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/currencyconverter"
            component={CurrencyConverterPage}
          />
        </Switch>
        <LocalStorageInput
          isToggled={toggleLocalStorage}
          closeWindowFunction={hideLocalStorage}
        />
        {/* <CurrencyConverterApp /> */}
      </main>
      <Footer
        toggleFunction={showLocalStorage}
        toggleButtonDisplay={toggleLocalStorage}
      />
    </div>
  );
}

export default App;
