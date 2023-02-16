import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { FaChevronLeft, FaMicrophone, FaCog } from 'react-icons/fa';
// import store from '../redux/configureStore';
// import { getCrypto } from '../redux/currencies/currencies';

export default function Details() {
  const currencies = useSelector((state) => state.currencies);
  const { id } = useParams();
  const currency = currencies.find((currency) => currency.id === id);
  return (
    <>
      <header className="App-header">
        <nav>
          <div className="flex">
            <NavLink to="/"><h2><FaChevronLeft /></h2></NavLink>
            <h3>2023</h3>
          </div>
          <h3>Details</h3>
          <div className="icons-container">
            <FaMicrophone />
            <FaCog />
          </div>
        </nav>
      </header>
      <div className="currency-details">
        <div className="currency-head">
          <h2>{currency.symbol}</h2>
          <h2>{currency.name}</h2>
        </div>
        <div className="detail bg1">
          <h3>Price</h3>
          <h3>
            US$
            {currency.priceUsd}
          </h3>
        </div>
        <div className="detail bg2">
          <h3>Prev. Price</h3>
          <h3>
            US$
            {currency.vwap24Hr}
          </h3>
        </div>
        <div className="detail bg1">
          <h3>Change</h3>
          <h3>
            {currency.changePercent24Hr}
            %
          </h3>
        </div>
        <div className="detail bg2">
          <h3>Market Cap</h3>
          <h3>
            US$
            {currency.marketCapUsd.slice(0, (currency.marketCapUsd.indexOf('.') + 6))}
          </h3>
        </div>
        <div className="detail bg1">
          <h3>Supply</h3>
          <h3>
            {currency.symbol}
            {currency.supply.slice(0, (currency.supply.indexOf('.') + 6))}
          </h3>
        </div>
        <div className="detail bg2">
          <h3>Volume</h3>
          <h3>
            US$
            {currency.volumeUsd24Hr.slice(0, (currency.volumeUsd24Hr.indexOf('.') + 6))}
          </h3>
        </div>
        <div className="detail bg1">
          <h3>More</h3>
          <h4><a href={currency.explorer}>{currency.explorer}</a></h4>
        </div>
      </div>
    </>
  );
}
