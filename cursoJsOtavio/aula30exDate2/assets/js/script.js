function refreshPage(){
    const div1 = document.querySelector('#dv1');
    const date = new Date();

    const day = weekDay(date.getDay());
    const rMonth = month(date.getMonth());

    div1.innerHTML = `<h1>${day}, ${date.getDate()} de ${rMonth} de ${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}
    :${date.getMinutes().toString().padStart(2, '0')}</h1>`;
}

refreshPage();
setInterval(refreshPage, 1000);

function weekDay(x) {
    let wDay = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return wDay[x];
}

function month(x) {
    let rMonth = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
         'Novembro', 'Dezembro'];
         return rMonth[x];
}
