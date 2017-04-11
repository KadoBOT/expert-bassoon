/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';
import {
  compose,
  onlyUpdateForPropTypes,
  pure,
  setPropTypes,
} from 'recompose';

const enhance = compose(
  pure,
  observer,
  onlyUpdateForPropTypes,
  setPropTypes({
    store: PropTypes.shape({
      count: PropTypes.number.isRequired,
      increase: PropTypes.func.isRequired,
      decrease: PropTypes.func.isRequired,
    }).isRequired,
  }),
);

const Counter = enhance(({ store }) => (
  <div>
    <h1>Counter module</h1>
    <p>{store.count}!!!</p>
    <button onClick={store.increase}>Inc</button>
    <hr />
    <button onClick={store.decrease}>Dec</button>
  </div>
));

export default Counter;
