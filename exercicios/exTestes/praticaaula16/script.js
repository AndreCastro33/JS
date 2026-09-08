//DIV 1 ----------------------------------//
let div1 = document.getElementById('dv1')
    div1.innerHTML = 'Número entre 1 e 100: '
let ctxt = document.createElement('input')
    ctxt.type = 'number'
    div1.appendChild(ctxt)
let botao = document.createElement('button')
    botao.textContent = 'Adicionar'
    botao.style.marginLeft = '10px'
    botao.onclick = clickAdd
div1.appendChild(botao)
let num = []
let div1c = document.getElementById('dv1')
let ctxt2 = document.createElement('select')
    ctxt2.size = '10'
    ctxt2.classList.add('ctxt2')
    div1c.appendChild(ctxt2)
let botao2 = document.createElement('button')
    botao2.textContent = 'Analisar'
    botao2.classList.add('botao2')
    botao2.onclick = clickAn
    div1c.appendChild(botao2)
//----------------------------------------//
//DIV 2 - Results ---------------------//
let div2 = document.getElementById('dv2')
    div2.classList.add('div2')
let totaln = 0
let soma = 0
let p = document.createElement('p')
let mv = document.createElement('p')
let menv = document.createElement('p')
let txtsoma = document.createElement('p')
let txtmedia = document.createElement('p')
//------------------------------------//
//Functions -----------------------------//
function clickAdd() {
    let ntxt = Number(ctxt.value)
    let existe = 0
    if (ctxt.value === '' || ctxt.value < 1 || ctxt.value > 100) {
        alert('Digite um número válido.')
        return
    }
    for (let c = 0; c < num.length; c++) {
        if (ntxt == num[c]) {
            existe = 1
            break
        }
    }
    if (existe == 1) {
        alert('Número já adicionado. Escolha outro número.')
    } else { 
        let item = document.createElement('option')
        item.text = `Número ${ntxt} adicionado`
        ctxt2.appendChild(item)
        num.push(ntxt)
        totaln += 1
        soma += ntxt
        div2.innerHTML = ''
    }
    if (ntxt > maiorv) {
        maiorv = ntxt
    }
    }
    function clickAn() {  
        if (num.length == 0) {
            alert('Digite pelo menos um número.')
            return
        }
        let menorv = num[0]
        let maiorv = num[0]
        for (let c = 0; c < num.length; c++) {
            if (num[c] < menorv) {
                menorv = num[c]
            }
            if (num[c] > maiorv) {
                maiorv = num[c]
            }
        }
        let media = (soma/totaln)
        p.innerText = `Total de números digitados: ${totaln}`
        div2.appendChild(p)
        mv.innerText = `Maior valor digitado: ${maiorv}`
        div2.appendChild(mv)
        menv.innerText = `Menor valor digitado: ${menorv}`
        div2.appendChild(menv)
        txtsoma.innerText = `Soma dos números: ${soma}`
        div2.appendChild(txtsoma)
        txtmedia.innerText = `Média dos valores: ${media}`
        div2.appendChild(txtmedia)
    }
//--------------------------------------//
    