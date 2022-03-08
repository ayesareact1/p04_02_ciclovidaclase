import React, { Component } from 'react'
import Hijo from './Hijo'

export class Padre extends Component {
  render() {
    return (
      <Hijo />
    )
  }
}

export default Padre