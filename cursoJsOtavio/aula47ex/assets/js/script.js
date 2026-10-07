// Div 1
const div1 = document.querySelector('#dv1');
const h1 = document.createElement('h1');
    h1.innerHTML = 'Timer';
    div1.appendChild(h1);
const p1 = document.createElement('p');
    p1.innerHTML = '00:00:00';
    p1.classList.add('p1');
    div1.appendChild(p1);
// Buttons
const p2Buttons = document.createElement('p');
    p2Buttons.style.display = 'flex';
    p2Buttons.style.gap = '5px';

const bStart = document.createElement('button');
    bStart.innerText = 'Start';
    p2Buttons.appendChild(bStart);

const bPause = document.createElement('button');
    bPause.innerText = 'Pause';
    p2Buttons.appendChild(bPause);

const bReset = document.createElement('button');
    bReset.innerText = 'Reset';
    p2Buttons.appendChild(bReset);

div1.appendChild(p2Buttons);
// Actions
let seconds = 0;
let timer;

function createSeconds (sec) {
    const data = new Date(sec * 1000);
    return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'GMT'});
}

function startWatch () {
        timer = setInterval(function() {
        seconds++;
        p1.innerHTML = createSeconds(seconds);
    }, 1000);
}

bStart.addEventListener('click', function() {
    clearInterval(timer)
    p1.style.color = 'black';
    startWatch()
});

bPause.addEventListener('click', function() {
    clearInterval(timer)
    p1.style.color = 'red';
});

bReset.addEventListener('click', function() {
    clearInterval(timer)
    p1.style.color = 'black';
    p1.innerHTML = '00:00:00';
    seconds = 0;
})
