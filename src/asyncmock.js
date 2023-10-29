const misProductos = [
  {
    id: "1",
    nombre: "Aritos enchapados",
    precio: 300,
    img: "./public/aritos_inicio.jpg",
    idCat: "1",
  },
  {
    id: "2",
    nombre: "Aros de oro",
    precio: 300,
    img: "./public/aros_oro.jpg",
    idCat: "1",
  },
  {
    id: "3",
    nombre: "Cadenita Corazon",
    precio: 400,
    img: "./public/cadenita_corazon.jpg",
    idCat: "2",
  },
  {
    id: "4",
    nombre: "Cadenitas SL",
    precio: 400,
    img: "./public/cadenitas_s_l.jpg",
    idCat: "2",
  },
  {
    id: "5",
    nombre: "Pulsera enchapada",
    precio: 300,
    img: "./public/pulsera_enchapada.jpg",
    idCat: "3",
  },
  
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 500);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((item) => item.id === id);
      resolve(producto);
    }, 500);
  });
};

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = misProductos.filter(
        (item) => item.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 500);
  });
};
