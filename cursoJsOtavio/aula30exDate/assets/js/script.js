const div1 = document.getElementById('dv1');
// Attaching -----
let text = document.createElement('h1');
text.classList.add('txtDv1')
div1.appendChild(text);

refreshPage();
setInterval(refreshPage, 1000);
// Functions -----
function refreshPage() {
    // Recepting values -----
    const date = new Date();
    const weekDay = date.getDay(); // Dia da semana
    const mDay = date.getDate(); // Dia do mês
    const month = date.getMonth(); // Mês
    const year = date.getFullYear(); // Ano
    const hours = date.getHours(); // Horas
    const min = date.getMinutes(); // Minutos
    // Real dates(writed) -----
    const rWday = realWday(weekDay);
    const realMonth = realM(month);
    const content = `${rWday}, ${mDay} de ${realMonth} de ${year} ${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
    text.innerHTML = content;
}

function realWday(x) {
let rWday; // Dia real da semana
    switch(x) {
    case 0:
        rWday = 'Domingo';
        return rWday;
    case 1:
        rWday = 'Segunda-feira';
        return rWday;
    case 2:
        rWday = 'Terça-feira';
        return rWday;
    case 3:
        rWday = 'Quarta-feira'
        return rWday;
    case 4:
        rWday = 'Quinta-feira';
        return rWday;
    case 5:
        rWday = 'Sexta-feira';
        return rWday;
    case 6:
        rWday = 'Sábado'
        return rWday;
    default:
        rWday = 'Inválido'
    }
}

function realM(x) {
let rMonth; // Mês real
    switch(x) {
        case 0:
            rMonth = 'Janeiro';
            return rMonth;
        case 1:
            rMonth = 'Fevereiro';
            return rMonth;
        case 2:
            rMonth = 'Março';
            return rMonth;
        case 3:
            rMonth = 'Abril';
            return rMonth;
        case 4:
            rMonth = 'Maio';
            return rMonth;
        case 5:
            rMonth = 'Junho';
            return rMonth;
        case 6:
            rMonth = 'Julho';
            return rMonth;
        case 7:
            rMonth = 'Agosto';
            return rMonth;
        case 8:
            rMonth = 'Setembro';
            return rMonth;
        case 9:
            rMonth = 'Outubro';
            return rMonth;
        case 10:
            rMonth = 'Novembro';
            return rMonth;
        case 11:
            rMonth = 'Dezembro';
            return rMonth;
        default:
            rMonth = 'Inválido';
    }
}
