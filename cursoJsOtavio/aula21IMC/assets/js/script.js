const sec = document.getElementById('section');
const title = document.getElementById('title')
    title.innerHTML = 'Tabela IMC';

const divInfo = document.getElementById('info');
divInfo.style.display = 'flex';
divInfo.style.justifyContent = 'space-between';
// div Info
    // Coluna IMC -----
const colunaIMC = document.createElement('div');
colunaIMC.style.flex = '1';

const imcH = document.createElement('h3');
    imcH.classList.add('txtH')
    imcH.innerHTML = 'IMC</br>';
    colunaIMC.appendChild(imcH);

const imcText = document.createElement('p');
    imcText.classList.add('txtImc')
    imcText.innerHTML = 'Menos que 18.5</br></br>';
    imcText.innerHTML += 'Entre 18.5 e 24.9</br></br>';
    imcText.innerHTML += 'Entre 25 e 29.9</br></br>';
    imcText.innerHTML += 'Entre 30 e 34.9</br></br>';
    imcText.innerHTML += 'Entre 35 e 39.9</br></br>';
    imcText.innerHTML += 'Mais que 40';
    colunaIMC.appendChild(imcText);

divInfo.appendChild(colunaIMC);
    // -----
    // Coluna result -----
const colunaResult = document.createElement('div');
colunaResult.style.flex = '1';

const imcH2 = document.createElement('h3');
    imcH2.classList.add('txtH2')
    imcH2.innerHTML = 'Resultado';
    colunaResult.appendChild(imcH2);

const imcText2 = document.createElement('p');
    imcText2.classList.add('txtResult')
    imcText2.innerHTML = 'Abaixo do peso</br></br>';
    imcText2.innerHTML += 'Peso normal</br></br>';
    imcText2.innerHTML += 'Sobrepeso</br></br>';
    imcText2.innerHTML += 'Obesidade grau 1</br></br>';
    imcText2.innerHTML += 'Obesidade grau 2</br></br>';
    imcText2.innerHTML += 'Obesidade grau 3';
    colunaResult.appendChild(imcText2);

divInfo.appendChild(colunaResult);
    // -----
// -----
// div1 -----
const title2 = document.getElementById('title2');
    title2.innerHTML = 'Calcule o IMC';

const div1 = document.getElementById('dv1');
const txtPeso = document.createElement('p');
    txtPeso.innerHTML = 'Peso(kg):';
    txtPeso.classList.add('txtPeso')
    div1.appendChild(txtPeso);
const caixaTxt = document.createElement('input');
    caixaTxt.type = 'text';
    caixaTxt.classList.add('cxPeso')
    div1.appendChild(caixaTxt);

const txtAltura = document.createElement('p');
    txtAltura.innerHTML = 'Altura(m):';
    txtAltura.classList.add('txtAltura');
    div1.appendChild(txtAltura);
const caixaAltura = document.createElement('input');
    caixaAltura.type = 'text';
    caixaAltura.classList.add('cxAltura')
    div1.appendChild(caixaAltura);

const botao = document.createElement('button');
    botao.type('submit')
    botao.textContent = 'Calcular';
    botao.classList.add('botao')
    div1.appendChild(botao);
    botao.onclick = clicar;
let valorPeso;
let valorAltura;
// -----
// div2 -----
const div2 = document.getElementById('dv2')
// -----
// Function -----
function clicar() {
    div2.innerHTML = '';
    sec.addEventListener('submit', function(e) {
        e.defaultPrevented
    });

    valorPeso = Number(caixaTxt.value);
    valorAltura = Number(caixaAltura.value);
    
    if (valorAltura >= 100) {
        valorAltura = (valorAltura / 100).toFixed(2)
    }

    let imc = valorPeso / (valorAltura * valorAltura);
    imc = imc.toFixed(2);
    
    const resultadoTxt = document.createElement('p');
    resultadoTxt.innerHTML = 'Resultado:</br>';
    resultadoTxt.classList.add('resultadoTxt');
    div2.appendChild(resultadoTxt);

    const cxResultado = document.createElement('p');
    cxResultado.classList.add('cxResultado');

    if (imc < 18.5) {
        cxResultado.innerHTML = 'Abaixo do peso';
        div2.appendChild(cxResultado);
    } else if (imc >= 18.5 && imc <= 24.9){
        cxResultado.innerHTML = `IMC: ${imc} </br></br>Peso normal`;
        div2.appendChild(cxResultado);
    } else if (imc >= 25 && imc <= 29.9) {
        cxResultado.innerHTML = `IMC: ${imc} </br></br>Sobrepeso`;
        div2.appendChild(cxResultado);
    } else if (imc >= 30 && imc <= 34.9) {
        cxResultado.innerHTML = `IMC: ${imc} </br></br>Obesidade grau 1`;
        div2.appendChild(cxResultado);
    } else if (imc >= 35 && imc <= 39.9) {
        cxResultado.innerHTML = `IMC: ${imc} </br></br>Obesidade grau 2`;
        div2.appendChild(cxResultado);
    } else if (imc > 40) {
        cxResultado.innerHTML = `IMC: ${imc} </br></br>Obesidade grau 3`;
        div2.appendChild(cxResultado);
    } else {
        cxResultado.innerHTML = 'Valor não calculavel';
        div2.appendChild(cxResultado);
    }
} 
// -----
