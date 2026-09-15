function formulario() {
const form = document.querySelector('.sec');
const resultado = document.querySelector('.resultado')
const pessoas = []

function recebeEvento (evento) {
    evento.preventDefault();
    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    pessoas.push({   //Objeto dentro do push para o array
        name: nome.value,
        middlename: sobrenome.value,
        weight: peso.value,
        height: altura.value
    })

    console.log(pessoas)

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
}
form.addEventListener('submit', recebeEvento);
}
formulario();    