let n = [4, 5, 1, 6, 3, 7, 3, 9, 2]
for (let c = 0; c < n.length; c++) {
    console.log(n[c])
}
console.log(`A variavel N tem ${n.length} posições`)
console.log(`O numero 9 esta na posição: ` + n.indexOf(9))
console.log('posiçoes na sequencia crescente: ' + n.sort())