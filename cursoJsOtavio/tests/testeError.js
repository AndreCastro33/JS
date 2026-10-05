//try {
//    console.log(Nexiste);
//} catch(error) {
//    console.log('Variável não encontrada')
//    console.log(error);
//}

function somaError (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x ou y não é um numero')
    }
    return x + y;
}

try {
    console.log(somaError(10, 5));
    console.log(somaError(10, '5'));
} catch (error) {
    console.log(error)
}
