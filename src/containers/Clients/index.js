import { connect } from 'react-redux'

import Clients from '../../components/molecules/Clients'

const mapStateToProps = state => ({
  clients: state.clients
})

export default connect(mapStateToProps)(Clients)
