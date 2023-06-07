import { useState, useEffect } from 'react'
import ClassComponent from './ClassComponent'
const FuncComponent = () => {
    // console.log('Funcion: Se ejecuta esta primera parte')
    const [pedido, setPedido] = useState('')


    useEffect(() => {
        // console.log('Funcion: Se montó el componente')

        return () => {
            console.log('El componente fue desmontado')
          
        }
    }, [])

    useEffect(() => {
        console.log('el componente fue actualizado')
       
        setTimeout(() => {
           setPedido('Pizzas')
        }, 2000)
    }, [pedido])

  return (
    <div>
      
        
        <>
    
            <h2 style={{fontSize:'3em', marginTop:'300px'}}>Su Pedido:</h2>
            <h3 style={{fontSize:'2em'}}>{pedido}</h3>
            {/*   // <button
            //     onClick={() => setPedido('') }
            // >Cancelar Pedido</button> */}
        </>
     
         
    </div>
  )
}

export default FuncComponent