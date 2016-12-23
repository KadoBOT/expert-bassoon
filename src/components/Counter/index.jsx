import React, {PropTypes} from 'react'

const Counter = ({count, decrementCounter, incrementCounter}) => (
  <div>
    <p>{count}</p>
    <button onClick={incrementCounter}>Increment ++</button>
    {' '}
    <button onClick={decrementCounter}>Decrement --</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  incrementCounter: PropTypes.func.isRequired
}

export default Counter
