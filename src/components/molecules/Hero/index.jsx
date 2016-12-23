import React, {PropTypes} from 'react'

import { HeroTitle, HeroSubtitle } from '../../atoms/HeroText'
import './hero.css'

const Hero = ({overlay, title, subtitle}) => {
  return(
    <div className="hero">
      {overlay && <div className="hero__gradient" />}
      <HeroTitle>{title}</HeroTitle>
      <HeroSubtitle>{subtitle}</HeroSubtitle>
    </div>
  )
}

Hero.propTypes = {
  props: PropTypes.type
}

export default Hero
