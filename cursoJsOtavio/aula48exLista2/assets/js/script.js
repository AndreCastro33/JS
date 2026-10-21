// Div 1
const div1 = document.querySelector('#dv1');
const txtBox = document.createElement('input');
    txtBox.type = 'text';
    txtBox.classList.add('txtBox');
    div1.appendChild(txtBox);
const buttonAdd = document.createElement('button');
    buttonAdd.innerText = 'Add';
    buttonAdd.classList.add('buttonAdd');
    div1.appendChild(buttonAdd);
// Div 2
const div2 = document.querySelector('#dv2');
// Functions
function clear() {
    txtBox.value = '';
    txtBox.focus();
}

function save() {
    const tasks = div2.querySelectorAll('div p');
    const taskList = [];

    for(let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let taskTxt = tasks[i].innerText;
        taskList.push(taskTxt);
    }
    const taskJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', taskJSON);
}

function refresh() {
    const tasksData = localStorage.getItem('tasks');
    if(!tasksData) return;
    const taskList = JSON.parse(tasksData);

    for(let task of taskList) {
        if(task.trim() === '') continue;

        createTaskRow(task);
    }
}

function createTaskRow(x) {
    const container = document.createElement('div');

    const elementP = document.createElement('p');
    elementP.innerText = x;

    const buttonDel = document.createElement('button');
    buttonDel.innerText = 'Delete';

    container.appendChild(elementP);
    container.appendChild(buttonDel);
    div2.appendChild(container);

    buttonDel.addEventListener('click', function() {
        container.remove();
        save();
    })
}

// Actions
buttonAdd.addEventListener('click', function() {
    const txtValue = txtBox.value.trim();
    if(txtValue === '') return alert('Invalid task.')
    
    createTaskRow(txtValue);
    clear();
    save();
})
refresh();
