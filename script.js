let buttonCriar = document.querySelector('#criar-tarefa');
let input = document.querySelector('#texto-tarefa');
let ol = document.querySelector('#lista-tarefas');

buttonCriar.addEventListener('click', addTask);
input.addEventListener('keyup', addTaskEnter);

function addTask() {
  if (input.value.length > 0) {
    let li = document.createElement('li');
    li.innerText = input.value;
    ol.appendChild(li);
    input.value = '';
  }
}

function addTaskEnter(event) {
  if (event.key == 'Enter' && input.value.length > 0) {
    let li = document.createElement('li');
    li.innerText = input.value;
    ol.appendChild(li);
    input.value = '';
  }
}