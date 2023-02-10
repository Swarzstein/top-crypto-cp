import React from 'react';
import { useSelector } from 'react-redux';
import Currency from '../components/Currency';

export default function Home() {
  const currencies = useSelector((state) => state.currencies);
  return (
    <div className="currencies">
      {currencies.map(
        (currency) => (
          <Currency
            key={currency.rank}
            rank={currency.rank}
            name={currency.name}
            symbol={currency.symbol}
            price={currency.priceUsd}
          />
        ),
      )}
    </div>
  );
}
