import React from 'react'
import './CartWidget.css'
const CartWidget = () => {
    const imgCarrito = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F225%2F984%2Fpng-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png&tbnid=wNGVN-Q-q0MbmM&vet=12ahUKEwjls_yXsuWBAxUljZUCHTOBCWQQMygAegQIARBu..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fes%2Fsearch%3Fq%3Dcarrito%2Bde%2Bcompras&docid=HdafyrTnP2YInM&w=920&h=512&q=imagenes%20de%20carritos%20de%20compras&ved=2ahUKEwjls_yXsuWBAxUljZUCHTOBCWQQMygAegQIARBu" ;
  return (
    <div>
        <img className='imgCarrito' src="./carrito.png" alt="Imagen de un carrito" />
        <strong> 5 </strong>
    </div>
  )
}

export default CartWidget