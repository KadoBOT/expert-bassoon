import React, {PropTypes} from 'react'

import separator from '../../../assets/Extra/shadow-separator.png'

const Separator = () => <img className="about__separator" src={separator} />

Separator.propTypes = {
  props: PropTypes.type
}

export default Separator
