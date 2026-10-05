function random (min, max) {
    let num = Math.random() * (max - min) + min;
    return Math.round(num);
}

const n1 = 50;
const n2 = 5;
let i = 0;

while (i !== 15) {
    i = random(n1, n2);
    console.log(i)
}
