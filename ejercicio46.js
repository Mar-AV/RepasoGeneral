const notas = [80, 90, 70, 100];
const suma = notas.reduce((acum, nota) => acum + nota, 0);
const promedio = suma / notas.length;
console.log("Promedio:", promedio);