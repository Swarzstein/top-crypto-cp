/* eslint-disable react/prop-types */
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
//  { showDetails } from '../redux/details/details';

export default function Currency(data) {
  const { currency, bg } = data;
  const {
    id, rank, name, symbol, priceUsd,
  } = currency;
  // console.log(currency);
  /* const dispatch = useDispatch();
  const currencyDetails = (currency) => {
    dispatch(showDetails(currency));
  }; */

  return (
    <Link to={`/${id}`}>
      <div role="presentation" className={`currency-box ${bg}`} id={id}>
        <h4>
          #
          {rank}
        </h4>
        <h2>{symbol}</h2>
        <h3>{name}</h3>
        <p>{priceUsd.slice(0, (priceUsd.indexOf('.') + 10))}</p>
      </div>
    </Link>
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
