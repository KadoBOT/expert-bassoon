import React, {PropTypes} from 'react'

import {Header, Slider, Home, Blog, Contact, Footer} from '../organisms'
import Careers from '../../containers/Careers'
import './main.css'

const App = () => (
  <div>
    <div>
      <Header />
      <Slider />
    </div>
    <div className="template__middle">
      <Home />
      <Careers />
      <Blog />
      <Contact />
    </div>
    <Footer />
  </div>
)

App.propTypes = {
  props: PropTypes.type
}

export default App
