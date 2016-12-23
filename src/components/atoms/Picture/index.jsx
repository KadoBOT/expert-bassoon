import React, {PropTypes} from 'react'

import './picture.css'

const Picture = ({className}) => {
  return(
    <div className={`picture ${className}`} />
  )
}

Picture.propTypes = {
  props: PropTypes.type
}

export default Picture
