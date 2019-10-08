import React from 'react';
import { Provider } from 'react-redux'

//Store
import store from './app/store'

//Components
import App from './app'

const AppConfig = _=> (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppConfig
