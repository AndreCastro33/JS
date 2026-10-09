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
// Div 2
const div2 = document.querySelector('#dv2');
// Actions
let elementsDv2 = [];
let buttonsDv2 = [];
buttondiv1.addEventListener('click', function(e) {
    let elementP = document.createElement('p');
        elementP.innerHTML = txtBoxDiv1.value;
        elementsDv2.push(elementP);
    div2.appendChild(elementsDv2[elementsDv2.length - 1]);
    // Button Div 2
    let bDv2 = document.createElement('button');
        bDv2.innerText = 'Delete';
        buttonsDv2.push(bDv2);
    div2.appendChild(buttonsDv2[buttonsDv2.length - 1]);

    bDv2.addEventListener('click', function(e) {
        let indexP = elementsDv2.indexOf(elementP);
        let indexB = buttonsDv2.indexOf(bDv2);
        
        div2.removeChild(elementsDv2[indexP]);
        div2.removeChild(buttonsDv2[indexB]);
        
        elementsDv2.splice(indexP, 1);
        buttonsDv2.splice(indexB, 1);
    })
})
