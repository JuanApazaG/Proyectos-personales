
//Objetos como modificar o quitar informacion de ellos
const producto = {
    nombreProducto : "monitos 20 pulgadas",
    precio : 300,
    disponible : true,
}
//agregar nuevas propiedades
producto.imagen = 'imagen.jpg'
//eliminar propiedades
delete producto.disponible;

console.log(producto);


// //para acceder a la propiedad
// console.log(producto.precio)
// console.log(producto.disponible)

// //otra forma pero no se utiliza
// console.log(producto["precio"])