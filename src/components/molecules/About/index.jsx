import React, {PropTypes} from 'react'

import { SubTitle, Text, Title } from '../../atoms/Text'
import { Divider, Separator } from '../../atoms'

import './about.css'

const About = ({title, subtitle, text}) => {
  return(
    <div className="about">
      {title && <Title>
        {title}
      </Title>}
      {title && <Separator /> }
      {subtitle && <SubTitle>
        {subtitle}
      </SubTitle>}
      {subtitle && <Divider /> }
      {text && <Text>
        {text}
      </Text>}
    </div>
  )
}

About.propTypes = {
  props: PropTypes.type
}

export default About
