import React from 'react';
import { useSelector } from 'react-redux';
import { FaMicrophone, FaCog } from 'react-icons/fa';
import Currency from '../components/Currency';

export default function Home() {
  const data = useSelector((state) => state.currencies);

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
      </header>
      <div className="currencies">
        {data.map(
          (currency) => {
            if (currency.rank % 4 === 1 || currency.rank % 4 === 0) {
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
