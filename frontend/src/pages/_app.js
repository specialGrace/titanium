import { wrapper } from "../redux/store";
import {Provider} from 'react-redux';

import '../styles/globals.css'

const MyApp = ({Component, ...rest}) => {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
      <Provider store={store}>
          <Component {...props.pageProps} />
      </Provider>
  );
};

export default  MyApp

