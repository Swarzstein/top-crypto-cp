import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Currency from '../components/Currency';
import store from '../redux/configureStore';

describe('Currency component', () => {
  it('Currency box renders', () => {
    const currency = {
      id: 'bitcoin',
      rank: '1',
      symbol: 'BTC',
      name: 'Bitcoin',
      supply: '19288081.0000000000000000',
      maxSupply: '21000000.0000000000000000',
      marketCapUsd: '421510245908.9933298571526450',
      volumeUsd24Hr: '6220421918.5937454009328059',
      priceUsd: '21853.4050074236690450',
      changePercent24Hr: '0.9239425835453880',
      vwap24Hr: '21749.1227056822936267',
      explorer: 'https://blockchain.info/',
    };
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Currency currency={currency} />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
