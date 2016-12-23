import React, {PropTypes} from 'react'
import R from 'ramda'

import { Client } from '../../atoms'
import { Text } from '../../atoms/Text'

import './clients.css'

const Clients = ({clients}) => {
  return(
    <div className="clients">
      {R.map(c =>
        <Client client={c}/>
      , clients)}
      <Text>
        Discover many more, or else you can contact us for more information.
      </Text>
    </div>
  )
}

Clients.propTypes = {
  props: PropTypes.type
}

export default Clients
