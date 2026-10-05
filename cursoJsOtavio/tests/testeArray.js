//const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//const [lista1, lista2, lista3] = numeros;
//console.log(lista1[2], lista2[2], lista3[2]);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [num0, num1, num2, ...resto] = numeros;
console.log(num0, num1, num2, resto);
