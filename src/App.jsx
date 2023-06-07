import { useState } from 'react'

import './App.css'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'

function App() {
  const [toggle, setToggle] = useState(true)

  return (
    <div style={{ backgroundColor: '#A9A9A9',width:'800px',height:'500px',borderRadius:'10px'}}>
    {toggle ? 
     <FuncComponent/>
     
      :
      <ClassComponent/>
    }
    <button style={{ backgroundColor: 'rgb(37, 150, 190)',width:'400px',height:'80px',fontSize:'2em'}}
      onClick={() => setToggle(!toggle)}
    >Cancelar Pedido</button>
    </div>
  )
}

export default App
