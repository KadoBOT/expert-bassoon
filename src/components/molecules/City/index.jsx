import React, {PropTypes} from 'react'

import { CityIcon, Picture } from '../../atoms'
import { Title } from '../../atoms/Text'
import './city.css'

const City = ({city, children}) => {
  return(
    <div className={`city city__${city.name}`}>
      <Picture className={`picture__${city.name}`} />
      <CityIcon city={city.name} />
      <Title>
        {city.where}
      </Title>
      {children}
    </div>
  )
}

City.propTypes = {
  props: PropTypes.type
}

export default City
