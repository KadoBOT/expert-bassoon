import React, {PropTypes} from 'react'
import R from 'ramda'

import { Description } from '../../atoms/Text'
import './text-columns.css'

const TextColumns = ({city}) => {
  return(
    <div className="text-columns">
      {R.map(t =>
        <Description>{t}</Description>
        , city.texts)}
    </div>
  )
}

TextColumns.propTypes = {
  props: PropTypes.type
}

export default TextColumns
