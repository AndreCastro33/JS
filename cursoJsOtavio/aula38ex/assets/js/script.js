const paragrafo = document.querySelector('#dv1');
const ps = paragrafo.querySelectorAll('p');

const estilo = getComputedStyle(document.body);
const backGcolor = estilo.backgroundColor;

for (let i = 0; i < ps.length; i++) {
    ps[i].style.backgroundColor = backGcolor;
    ps[i].style.color = '#FFFFFF';
}
