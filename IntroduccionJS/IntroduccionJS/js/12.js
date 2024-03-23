"use strict";

const producto = {
    nombreProducto : "monitos 20 pulgadas",
    precio : 300,
    disponible : true,
}

Object.seal(producto);
//agregar nuevas propiedades
// producto.imagen = 'imagen.jpg'

// delete producto.precio
console.log(producto)
