import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Home from '../pages/home';
import store from '../redux/configureStore';

describe('Currency component', () => {
  it('Currency box renders', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
