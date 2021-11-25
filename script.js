const buttonCriar = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
const buttonApagar = document.querySelector('#apaga-tudo');

buttonCriar.addEventListener('click', addTask);

function addTask() {
  if (input.value.length > 0) {
    const li = document.createElement('li');
    li.innerText = input.value;
    input.value = '';
    ol.appendChild(li);
  }
}
ol.addEventListener('click', colorTask);
function colorTask(event) {
  const selected = document.querySelector('.listSelected');
  if (selected === null) {
    event.target.classList.add('listSelected');
  } else {
    selected.classList.remove('listSelected');
    event.target.classList.add('listSelected');
  }
}

let verificador = false;
ol.addEventListener('dblclick', colorList);
function colorList(event) {
  if(verificador === false) {
    event.target.classList.add('completed');
    verificador = true;
  } else {
    event.target.classList.remove('completed');
    verificador = false;
  }
}

let list = document.getElementsByTagName('li');
buttonApagar.addEventListener('click', deleteList);
function deleteList() {
  for(let index = list.length-1; index >= 0; index -= 1) {
    let element = list[index];
    ol.removeChild(element);
  }
}
