import { useState } from 'react'

import './App.css'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'

function App() {
  const [toggle, setToggle] = useState(true)

  return (
    <div style={{ backgroundColor: '#A9A9A9',width:'600px',height:'200px',borderRadius:'10px'}}>
    {toggle ? 
     <FuncComponent/>
     
      :
      <ClassComponent/>
    }
    <button style={{ backgroundColor: 'rgb(37, 150, 190)',width:'200px',height:'50px',fontSize:'1em'}}
      onClick={() => setToggle(!toggle)}
    >Cancelar Pedido</button>
    </div>
  )
}

export default App
