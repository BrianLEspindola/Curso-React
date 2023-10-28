import React from 'react';
import { useState } from 'react';

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState (1);

    const incrementar = () => {
        if (contador < stock) {
            setContador (contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > 1){
            setContador(contador - 1);
        }
    }
  return (
    <>
    <button onClick={decrementar}> - </button>
    <strong> {contador}  </strong>
    <button onClick={incrementar}> + </button>
    
    
    </>
  )
}

export default ItemCount