// Div 1
const div1 = document.querySelector('#dv1');
const txtBox = document.createElement('input');
    txtBox.classList.add('txtBox');
    txtBox.type = 'text';
    txtBox.placeholder = 'Digit your task...';
div1.appendChild(txtBox);
const buttonAdd = document.createElement('button')
    buttonAdd.classList.add('buttonAdd');
    buttonAdd.innerText = 'Add';
div1.appendChild(buttonAdd);
// Div 2
const div2 = document.querySelector('#dv2');
// Functions
function createDivP(text) {
    const elDivP = document.createElement('div');
        elDivP.classList.add('elDivP');
    const elP = document.createElement('p');
        elP.innerText = text;
    elDivP.appendChild(elP);
    
    const bDel = document.createElement('button');
        bDel.classList.add('bDel');
        bDel.innerText = 'Delete'
    elDivP.appendChild(bDel);
    
    div2.appendChild(elDivP);

    return [elDivP, bDel]; 
}

function clear() {
    txtBox.value = '';
    txtBox.focus();
}
// Actions
buttonAdd.addEventListener('click', function(){
    if(txtBox.value === '') return alert('Invalid value.');

    let [p, bDel] = createDivP(txtBox.value);

        bDel.addEventListener('click', function(){
            div2.removeChild(p);
        });
    clear();
});
