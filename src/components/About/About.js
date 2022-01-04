import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <h2>About the Currency Toolkit</h2>
      <div className="link-box">
        <a
          href="https://github.com/warptrail/currency-toolkit"
          target="_blank"
          rel="noopener noreferrer"
          className="repo-link"
        >
          Project Repo <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>

      <p>
        This web application was created with the intention to refine my
        front-end development skills and experiment with React. The primary
        focus is to utilize forms to do basic calculations one might require for
        several monetary-related situations. Made with React and React Router.
      </p>
      <p>
        Bookmark this app and keep it on your phone so when you are out
        shopping, you can quickly calculate your financial decisions!
      </p>
      <p>There are four main apps:</p>
      <h4>1. Currency Converter</h4>
      <p>
        Convert any currency to any other currency using a third party api that
        the client fetches.
      </p>
      <p>
        <a
          href="https://exchangeratesapi.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          exchangeratesapi.io
        </a>{' '}
        is a third party api used to get real-time exchange rates.
      </p>

      <h4>2. Percentages</h4>
      <p>
        When you’re out shopping and see a sign that says 60% off the original
        price, now you can see exactly how much you save and how much you’ll
        spend.
      </p>
      <p>
        Find the percent of a certain number by value or ratio.{' '}
        <i>x % of y is z</i> and <i>x is y% of z</i> formats
      </p>

      <h4>3. Salary to Hourly</h4>
      <p>Convert between hourly and salary incomes</p>
      <p>Adjust hours worked per week and tax rate</p>

      <h4>4. Tip Calculator</h4>
      <p>
        Enter the cost of a meal, choose tip amount and split by the members of
        your party
      </p>

      <h4>Stocks</h4>
      <p>
        The Stock Ticker on top is fetched from{' '}
        <a href="https://polygon.io/" target="_blank" rel="noopener noreferrer">
          polygon.io
        </a>{' '}
        api and made with the Slick Carousel plugin. Data is stored in your
        browsers local storage to prevent over-calling the api.{' '}
      </p>
      <p>
        The free version is limited to five calls per certain amount of time, so
        I picked my favorite stocks / commodities to share: Apple, Tesla,
        Starbucks, Bitcoin and Gold
      </p>
    </div>
  );
};

export default About;
