// @flow
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

type Props = {
  counter: number,
  addOne: () => void,
  counterLog: () => void
};

class Counter extends React.Component {
  componentDidMount() {
    const css = 'background: #222; color: #bada55; font-size: 32px;';
    console.warn(`%c\nInitial State: ${this.props.counter}\n\n`, css);
  }

  props: Props;

  render() {
    return (
      <div>
        <h1>Counter module</h1>
        <p>{JSON.stringify(this.props.counter)}</p>
        <button onClick={this.props.addOne}>Inc</button>
        <hr />
        <button onClick={this.props.counterLog}>Log State</button>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({
  addOne: actions.addOne,
  counterLog: actions.counterLog,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
