import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pedido: '',
          
        }
        // console.log('Class: Se ejecuta el constructor')
    }

    componentDidMount(){
        // console.log('Class: Se montó el componente')
    }
    componentDidUpdate(){
        console.log('el componente fue actualizado')
    }
    componentWillUnmount(){
        console.log('El componente fue desmontado')
    }

  render() {
    // console.log('Class: Se ejecuta el render')
    return (
      <div>
           <h2 style={{fontSize:'3em', marginTop:'300px'}}>Su Pedido:</h2>
            <h3 style={{fontSize:'2em'}}>{this.state.pedido}</h3>
         
            {/* <button
                onClick={() => this.setState({name: 'Nicolas'})}
            >Cancelar Pedido</button> */}
      </div>
     
    )
  }
}
