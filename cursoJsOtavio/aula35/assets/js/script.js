const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const div1 = document.querySelector('#dv1');

for(i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let cElement = document.createElement(tag);
    let txtElement = document.createTextNode(texto);
    cElement.appendChild(txtElement);
    div1.appendChild(cElement);
}
