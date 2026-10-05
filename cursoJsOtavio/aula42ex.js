function divisivel (x) {
    let result = typeof x == 'number' ? 'Tipo: numero' : x;
    result += ' , ' + (x % 3 === 0 ? 'Fizz' : x);
    result += ' , ' + (x % 5 === 0 ? 'Buzz' : x);
    result += ' , ' + (x % 3 === 0 && x % 5 == 0 ? 'FizzBuzz' : x);
    return result;
}

for (let i = 0; i <= 100; i++) {
    console.log(divisivel(i));
}
