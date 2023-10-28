const misProductos = [
    {id: 1, "Aritos", precio: 300, img: "./public/aritos_inicio.jpg"},
    {id: 2, "Aros de oro", precio: 300, img: "./public/aros_oro.jpg"},
    {id: 3, "Cadenita Corazon", precio: 400, img: "./public/cadenita_corazon.jpg"},
    {id: 4, "Cadenitas SL", precio: 400, img: "./public/cadenitas_s_l.jpg"},
    {id: 5, "Pulsera enchapada", precio: 300, img: "./public/pulsera_enchapada.jpg"},
    {id: 6, "Pulsera y Arito", precio: 300, img: "./public/pulsera_y_aritos.jpg"},
]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}