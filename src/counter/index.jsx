/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';

const Counter = ({ store }) => (
  <div>
    <h1>Counter module</h1>
    <p>{store.count}!!!</p>
    <button onClick={store.increase}>Inc</button>
    <hr />
    <button onClick={store.decrease}>Dec</button>
  </div>
);

Counter.propTypes = {
  store: PropTypes.shape({
    count: PropTypes.number.isRequired,
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired,
  }).isRequired,
};

export default observer(Counter);
