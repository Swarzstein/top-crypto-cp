import React from 'react';
// import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

export default function Details() {
  // const currency = useSelector((state) => state.details);
  const currency = useLocation().state;
  console.log(currency);
  /* const { id } = useParams();
  const keys = Object.keys(currency);
  const details = keys.map((key) => (
    <div key={key}>
      <h3>{key}</h3>
      <h3>{currency[key]}</h3>
    </div>
  )); */

  return (
    <>
      <header className="App-header">
        <nav>
          <div className="arrow flex">
            <div className="backArrow" />
            <h2>2023</h2>
          </div>
          <h1>Details</h1>
          <div className="icons-container">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25682.png" alt="mic" />
            <img src="https://cdn-icons-png.flaticon.com/512/3019/3019014.png" alt="settings" />
          </div>
        </nav>
      </header>
      <div className="currency-details">
        <div className="detail">
          <h3>Price</h3>
          <h3>{currency.priceUsd}</h3>
        </div>
        <div className="detail">
          <h3>Prev. Price</h3>
          <h3>{currency.vwap24Hr}</h3>
        </div>
        <div className="detail">
          <h3>Change</h3>
          <h3>{currency.changePercent24Hr}</h3>
        </div>
        <div className="detail">
          <h3>Price</h3>
          <h3>{currency.priceUsd}</h3>
        </div>
        <div className="detail">
          <h3>Price</h3>
          <h3>{currency.priceUsd}</h3>
        </div>
        <div className="detail">
          <h3>Price</h3>
          <h3>{currency.priceUsd}</h3>
        </div>
        <div className="detail">
          <h3>Price</h3>
          <h3>{currency.priceUsd}</h3>
        </div>
        <div className="detail">
          <h3>Price</h3>
          <h3>{currency.priceUsd}</h3>
        </div>
      </div>
    </>
  );
}
