import React from 'react';
import propTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function Currency({ rank, name, symbol, price }) {
  return (
    <div className="currency-box">
      <h4>
        #
        {rank}
      </h4>
      <h2>{symbol}</h2>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}

Currency.defaultProps = {
  rank: '',
  symbol: '',
  name: '',
  price: '',
};

Currency.prop = {
  rank: propTypes.number,
  symbol: propTypes.string,
  name: propTypes.string,
  price: propTypes.number,
};
