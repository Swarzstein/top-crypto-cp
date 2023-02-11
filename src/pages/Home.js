import React from 'react';
import { useSelector } from 'react-redux';
import Currency from '../components/Currency';

export default function Home() {
  const data = useSelector((state) => state.currencies);
  // const { currencies } = data;
  // console.log('Home', currency);
  return (
    <>
      <header className="App-header">
        <nav>
          <div className="arrow flex">
            <div className="backArrow" />
            <h2>2023</h2>
          </div>
          <h1>Crypto Currencies Today</h1>
          <div className="icons-container">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25682.png" alt="mic" />
            <img src="https://cdn-icons-png.flaticon.com/512/3019/3019014.png" alt="settings" />
          </div>
        </nav>
      </header>
      <div className="currencies">
        <div className="currency-head">
          <h1>Top 100 Cryptocurrencies</h1>
        </div>
        {data.map(
          (currency) => (
            <Currency
              key={currency.rank}
              currency={currency}
            />
          ),
        )}
      </div>
    </>
  );
}
