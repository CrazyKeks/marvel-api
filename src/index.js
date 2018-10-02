import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './store/configStore'
import { Provider } from 'react-redux'
import App from './components/home/App';
import Detail from './components/detail/';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <Detail />
    </div>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
