import React from 'react';
import ReactDOM from 'react-dom';

import Store from './store';
import Counter from './counter/';

const store = new Store();

ReactDOM.render(
  <Counter store={store} />,
  document.getElementById('root'),
);
