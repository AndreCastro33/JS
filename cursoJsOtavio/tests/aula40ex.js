// Escreva uma função que receba 2 numeros e retorne o maior deles
function maiorN () {
    let num1 = Math.floor((Math.random() * 101));
    let num2 = Math.floor((Math.random() * 101));
    if (num1 > num2) {
        return console.log(num1);
    } else {
        return console.log(num2);
    }
}

maiorN();
console.log('########');

function maiorN2 (x, y) {
    if (x > y) {
        return console.log(x);
    } else {
        return console.log(y);
    }
}

maiorN2(5, 15);
maiorN2(20,);
