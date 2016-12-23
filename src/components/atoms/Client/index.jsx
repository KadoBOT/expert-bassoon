import React, {PropTypes} from 'react'

import './client.css'

const Client = ({client}) => {
  return(
    <div className="client">
      <div className="client__logo">
        <div className={`client__logo__${client}`} />
      </div>
    </div>
  )
}

Client.propTypes = {
  props: PropTypes.type
}

export default Client
