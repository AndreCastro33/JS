function fat(x) {
    let r = 1
    for(let fato = x; fato > 1; fato--) {
        r *= fato
    }
    return r
}
console.log(fat(4))