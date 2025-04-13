function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
let base = parseFloat(prompt("Ingresa la base:"));
let altura = parseFloat(prompt("Ingresa la altura:"));
console.log("Área del triángulo:", calcularAreaTriangulo(base, altura));