const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
];
const productosConIVA = productos.map(producto => ({
    nombre: producto.nombre,
    precio: producto.precio * 1.12,
}));
console.log(productosConIVA);