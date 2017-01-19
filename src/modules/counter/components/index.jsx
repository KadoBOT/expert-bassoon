import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Counter extends React.Component {
  componentDidMount() {
    const css = 'background: #222; color: #bada55; font-size: 32px;';
    console.log(`%c\nInitial State: ${this.props.counter}\n\n`, css);
  }

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

Counter.defaultProps = {
  counter: 0,
};

Counter.propTypes = {
  addOne: PropTypes.func.isRequired,
  counterLog: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
