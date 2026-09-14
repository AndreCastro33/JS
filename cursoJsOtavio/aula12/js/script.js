let varA = 'a'; // b
let varB = 'b'; // c
let varC = 'c'; // a
let varX;

varX = varA;
varA = varB;
varB = varC;
varC = varX;

console.log(varA, varB, varC);