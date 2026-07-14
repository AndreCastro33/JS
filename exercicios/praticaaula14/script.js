var head = document.getElementById('hd')   // cabeçalho
head.innerHTML = ('<h1>Contagem</h1>')
// Texto HTML pelo JS (teste) ------
var div1 = document.getElementById('dv1')  
var textoInicio = document.createTextNode('Inicio: ')
    div1.appendChild(textoInicio)
var div2 = document.getElementById('dv2')
var texto1 = document.createElement('input') 
    texto1.type = ('number')
    div1.appendChild(texto1) 
var br = document.createElement ('br')
var textoFim = document.createTextNode(' // Fim: ')
    div1.appendChild(textoFim)
var texto2 = document.createElement('input')
    texto2.type = ('number')
    div1.appendChild(texto2)
var textoPasso = document.createTextNode('  // Passo: ')
    div1.appendChild(textoPasso)
var texto3 = document.createElement('input')
    texto3.type = ('number')
    div1.appendChild(texto3)
    div1.appendChild(br)
var botao = document.createElement('button')
    botao.textContent = ("Verificar")
    botao.classList.add('bot')
    div1.appendChild(botao)
// -----------------------------------

// DIV2 resultado (teste de style pelo JS) --------
div2.style.backgroundColor = 'white'
div2.style.width = '300px'
div2.style.margin = 'auto'
div2.style.borderRadius = '10px'
div2.style.boxShadow = '5px 5px 15px'
function clicar() {
    var valor1 = Number(texto1.value)
    var valor2 = Number(texto2.value)
    var valor3 = Number(texto3.value)
    if (valor3 <= 0) {
        window.alert('Passo iválido. Considerando passo 1.')
        valor3 = Number(1)
    }
    div2.innerHTML = '<br>Contando...</br>'
    if (valor1 < valor2) {
        for (var i = valor1 ; i <= valor2 ; i += valor3) {
            div2.innerHTML += i + ' , '
        } 
    } else {
            for (var i = valor1; i >= valor2; i -= valor3) {
                div2.innerHTML += i + ' , '
            }
        }
    div2.innerHTML += 'Fim'
}
botao.addEventListener('click', clicar)
// -------------------------------------------------