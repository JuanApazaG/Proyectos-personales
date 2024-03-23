const producto = {
    nombreProducto : "monitos 20 pulgadas",
    precio : 300,
    disponible : true,
}

//forma anterior
const precioProducto = producto.precio;
const disponibleProducto= producto.disponible;

console.log(precioProducto);
console.log(disponibleProducto);

//Destructuring
const {precio, nombreProducto, disponible} = producto;
console.log(precio);
console.log(disponible);