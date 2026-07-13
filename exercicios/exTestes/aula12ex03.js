var dia = new Date()
var dsem = dia.getDay()
switch (dsem) {
    case 0:
        console.log('Domingo')
    break
    case 1:
        console.log('Segunda-Feira')
    break
    case 2:
        console.log('Terça-Feira')
    break
    case 3:
        console.log('Quarta-feira')
    break
    case 4:
        console.log('Quinta-feira')
    break
    case 5:
        console.log('Sexta-feira')
    break
    case 6:
        console.log('Sabado')
    break
    default:
    break
}