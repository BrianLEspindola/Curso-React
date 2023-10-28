const misProductos = [
    { id: 1, nombre: "Aritos enchapados", precio: 300, img: "./public/aritos_inicio.jpg" },
    { id: 2, nombre: "Aros de oro", precio: 300, img: "./public/aros_oro.jpg" },
    { id: 3, nombre: "Cadenita Corazon", precio: 400, img: "./public/cadenita_corazon.jpg" },
    { id: 4, nombre: "Cadenitas SL", precio: 400, img: "./public/cadenitas_s_l.jpg" },
    { id: 5, nombre: "Pulsera enchapada", precio: 300, img: "./public/pulsera_enchapada.jpg" },
    { id: 6, nombre: "Pulsera y Arito", precio: 300, img: "./public/pulsera_y_aritos.jpg" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 500);
    });
}


export const getUnProducto = () => {
    return new Promise(resolve => { 
        setTimeout(()=> {
          const producto = misProductos.find(item => item.id === id);
          resolve(producto);
        }, 500)
})
}