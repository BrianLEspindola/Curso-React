import { useState, useEffect } from 'react'

import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemCount from './componentes/ItemCount/ItemCount'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'




function App() {
  

  return (
    <>
     <NavBar/>
     <ItemListContainer/>
     <ItemDetailContainer/>
     
     <ItemCount stock={5}/> 
     

    </>
  )
}

export default App
