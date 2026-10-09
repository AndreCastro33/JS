// Div 1
const div1 = document.querySelector('#dv1');
const divTxt = document.querySelector('#divTxt')
const title = document.createElement('h1');  // Title
    title.innerHTML = 'To-do List';
div1.appendChild(title);
const txtBoxDiv1 = document.createElement('input');  // Text box 
    txtBoxDiv1.type = 'text';
    txtBoxDiv1.classList.add('txtBoxDiv1')
divTxt.appendChild(txtBoxDiv1);
const buttondiv1 = document.createElement('button');  // Button
    buttondiv1.innerText = 'Add'
    buttondiv1.classList.add('buttondiv1');
divTxt.appendChild(buttondiv1);

div1.appendChild(divTxt);
// Actions

