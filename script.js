const buttonCriar = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');

buttonCriar.addEventListener('click', addTask);
input.addEventListener('keyup', addTaskEnter);

function addTask() {
  if (input.value.length > 0) {
    const li = document.createElement('li');
    li.innerText = input.value;
    ol.appendChild(li);
    input.value = '';
  }
}

function addTaskEnter(event) {
  if (event.key === 'Enter' && input.value.length > 0) {
    const li = document.createElement('li');
    li.innerText = input.value;
    ol.appendChild(li);
    input.value = '';
  }
}


const li = document.querySelectorAll('li');
console.log(li)
for (let key of li) {
  key.addEventListener('click', colorModific);
  function colorModific(event) {
    event.target.style.backgroundColor = rgb(128, 128, 128)
  }
}


const TaskList = document.querySelectorAll('li');

for (const key of TaskList) {
    const element = key;
    element.remove();
}
