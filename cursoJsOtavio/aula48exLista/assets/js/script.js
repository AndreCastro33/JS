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
const buttonAdd = document.createElement('button');  // Button
    buttonAdd.innerText = 'Add'
    buttonAdd.classList.add('buttonAdd');
divTxt.appendChild(buttonAdd);

div1.appendChild(divTxt);
// Div 2
const div2 = document.querySelector('#dv2');
// Functions
function createElementP() {
    let elementP = document.createElement('p');
    elementP.classList.add('elementP')
    elementP.innerHTML = txtBoxDiv1.value;
    elementsDv2.push(elementP);
    div2.appendChild(elementsDv2[elementsDv2.length - 1]);
    save();
    return elementP;
}

function createBdelete() {
    let bDelete = document.createElement('button');
    bDelete.classList.add('bDelete');
    bDelete.innerText = 'Delete';
    buttonsDv2.push(bDelete);
    div2.appendChild(buttonsDv2[buttonsDv2.length - 1]);
    return bDelete;
}

function clear() {
    txtBoxDiv1.value = '';
    txtBoxDiv1.focus();
}

function deleteP(deleteP, deleteB) {
    let indexP = elementsDv2.indexOf(deleteP);
    let indexB = buttonsDv2.indexOf(deleteB);
            
    div2.removeChild(elementsDv2[indexP]);
    div2.removeChild(buttonsDv2[indexB]);
    
    elementsDv2.splice(indexP, 1);
    buttonsDv2.splice(indexB, 1);
    save();
}

function save() {
    const tasks = div2.querySelectorAll('p');
    const taskList = [];

    for(let task of tasks) {
        let taskTxt = task.innerText;
        taskList.push(taskTxt);
    }
    const taskJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', taskJSON);
}

function savedRefresh() {
    const tasks = localStorage.getItem('tasks');
    if(!tasks) return;
    const taskList = JSON.parse(tasks);

    for(let i = 0; i < taskList.length ; i++) {
        let task = taskList[i]
        if(task.trim() === '') continue;

    txtBoxDiv1.value = task;

    const escopoP = createElementP();
    const escopoBdelete = createBdelete();
    
    escopoBdelete.addEventListener('click', function(e) {
        deleteP(escopoP, escopoBdelete);
        save();
    });
    }
    clear();
}
// Actions
let elementsDv2 = [];
let buttonsDv2 = [];
buttonAdd.addEventListener('click', function(e) {
    if (txtBoxDiv1.value.trim() === '') {
        alert('Invalide value');
        return;
    } else {
    const escopoP = createElementP();
    clear();
    // Button Div 2
    const escopoBdelete = createBdelete();

    escopoBdelete.addEventListener('click', function(e) {
        deleteP(escopoP, escopoBdelete);
        save();
    })
    save();
    }
})

savedRefresh();
