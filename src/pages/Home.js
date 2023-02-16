import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaMicrophone, FaCog } from 'react-icons/fa';
import Currency from '../components/Currency';

export default function Home() {
  const currencies = useSelector((state) => state.currencies);
  const [currenciesFilter, setCurrenciesFilter] = useState('');

  const data = currencies.filter((currency) => (
    currenciesFilter.toLowerCase() === '' ? currency : (currency.name.toLowerCase().includes(currenciesFilter) || currency.symbol.toLowerCase().includes(currenciesFilter))
  ));
  let counter = 0;
  return (
    <>
      <header className="App-header">
        <nav>
          <div>
            <h3>2023</h3>
          </div>
          <h4>Cryptocurrencies Today</h4>
          <div className="icons-container">
            <FaMicrophone />
            <FaCog />
          </div>
        </nav>
        <input type="search" name="currencies-filter" value={currenciesFilter} onChange={(e) => setCurrenciesFilter(e.target.value)} placeholder="Search" />
      </header>
      <div className="currencies">
        {data.map(
          (currency) => {
            counter += 1;
            if (counter % 4 === 1 || counter % 4 === 0) {
              return (
                <Currency
                  key={currency.rank}
                  currency={currency}
                  bg="bg1"
                />
              );
            }
            return (
              <Currency
                key={currency.rank}
                currency={currency}
                bg="bg2"
              />
            );
          },
        )}
      </div>
    </>
  );
}

/* <MapList
          CountriesData={countries.filter((country) => (
            data.toLowerCase() === '' ? country : country.name.toLowerCase().includes(data)
          ))}
        /> */
