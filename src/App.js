import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import HomePage from './routes/HomePage';
import CurrencyConverterPage from './routes/CurrencyConverterPage';
import PercentagesPage from './routes/PercentagesPage';
import SalaryHourlyPage from './routes/SalaryHourlyPage';
import TipCalculatorPage from './routes/TipCalculatorPage';

import Footer from './components/Footer/Footer';
import AboutPage from './routes/AboutPage';

function App() {
  const [appMenuClick, setAppMenuClick] = useState(false);

  // menu toggle functions
  const handleClick = () => setAppMenuClick(!appMenuClick);
  const closeMobileMenu = () => setAppMenuClick(false);

  // Toggle the local storage window

  return (
    <>
      <div className="wrapper">
        <Header
          appMenuClick={appMenuClick}
          handleClick={handleClick}
          closeMobileMenu={closeMobileMenu}
        />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/currencyconverter"
              component={CurrencyConverterPage}
            />
            <Route exact path="/percentages" component={PercentagesPage} />
            <Route exact path="/salaryhourly" component={SalaryHourlyPage} />
            <Route exact path="/tipcalculator" component={TipCalculatorPage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
