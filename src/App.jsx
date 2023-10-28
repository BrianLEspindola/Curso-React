import { useState, useEffect } from 'react'

import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemCount from './componentes/ItemCount/ItemCount'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <ItemCount stock={5}/> 
     <ItemListContainer/>
     
     

    </>
  )
}

export default App
