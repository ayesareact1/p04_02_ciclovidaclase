import React, { Component } from 'react'
import Hijo from './Hijo'

export class Padre extends Component {

  nombreUsuario = 'Juan';

  constructor(props) {
    super(props);
    console.log('Se ejecuta el constructor del padre');
    this.state = {
      mensaje: 'Bienvenidos!',
      cantidad: 0
    }
  }

  componentDidMount() {
    console.log('Se ejecuta el método componentDidMount del padre');
    setTimeout(() => {
      this.setState({mensaje: '¿Qué tal?'});
    }, 2000)
    setTimeout(() => {
      this.nombreUsuario = 'Laura';
    }, 4000)
  }

  componentDidUpdate() {
    console.log('Se ejecuta el método componentDidUpdate del padre');
  }

  // componentWillUnmount() {
  //   clearTimeout()
  // }

  handleSetCantidad = (cantidad) => {
    this.setState(prevState => {
      return {cantidad: prevState.cantidad += cantidad}
    })
  }

  render() {
    console.log('Se ejecuta el método render del padre')
    return (
      <>
        {/* <p>{this.state.mensaje}</p> */}
        <p>Cantidad {this.state.cantidad}</p>
        <Hijo  mensaje={this.state.mensaje} 
               nombreUsuario={this.nombreUsuario}
               handleSetCantidad={this.handleSetCantidad}/>
      </>
    )
  }
}

export default Padre