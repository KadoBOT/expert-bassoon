import { connect } from 'react-redux'

import Careers from '../../components/organisms/Careers'

const mapStateToProps = state => ({
  careers: state.careers
})

export default connect(mapStateToProps)(Careers)
