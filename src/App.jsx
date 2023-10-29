import { useState, useEffect } from 'react'

import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemCount from './componentes/ItemCount/ItemCount'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  

  return (
    <>
    <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='/' element={ <ItemListContainer/> } />
      <Route path='/categoria/:idCategoria' element={ <ItemListContainer/>} />
      <Route path='/item/idItem' element={ <ItemDetailContainer/>} />
     </Routes>
     <ItemListContainer/>
     <ItemDetailContainer/>
     
     <ItemCount stock={5}/> 
     </BrowserRouter>
     

    </>
  )
}

export default App
