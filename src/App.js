import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import CurrencyConverterApp from './components/CurrencyConverterApp/CurrencyConverterApp';
import LocalStorageInput from './components/LocalStorageInput/LocalStorageInput';

function App() {
  const [toggleLocalStorage, setToggleLocalStorage] = useState(false);

  const showLocalStorage = (e) => {
    setToggleLocalStorage(true);
  };

  const hideLocalStorage = (e) => {
    setToggleLocalStorage(false);
  };
  return (
    <div>
      <Header
        toggleFunction={showLocalStorage}
        toggleButtonDisplay={toggleLocalStorage}
      />
      <main>
        <LocalStorageInput
          isToggled={toggleLocalStorage}
          closeWindowFunction={hideLocalStorage}
        />
        <CurrencyConverterApp />
      </main>
    </div>
  );
}

export default App;
