import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as actions from '../../actions'
import Counter from '../../components/Counter'

const mapStateToProps = state => ({count: state})

const mapDispatchToProps = dispatch => bindActionCreators({
  incrementCounter: actions.increment,
  decrementCounter: actions.decrement
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
