import React, { Component } from 'react'

export class Hijo extends Component {

  constructor(props) {
    super(props);
    // console.log('Se ejecuta el constructor del hijo');
  }

  componentDidMount() {
    // console.log('Se ejecuta el componentDidMount del hijo');
  }

  render() {
    // console.log('Se ejecuta el render del hijo');
    return (
      // <div>Hijo</div>
      <>
      <p>{this.props.mensaje}</p>
      <p>{this.props.nombreUsuario}</p>
      <hr />
      <button onClick={() => this.props.handleSetCantidad(1)}>+</button>
      <button onClick={() => this.props.handleSetCantidad(-1)}>-</button>
      </>
    )
  }
}

export default Hijo