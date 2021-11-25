// Variáveis
const buttonCriar = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
const buttonApagar = document.querySelector('#apaga-tudo');
const buttonDeleteFinal = document.getElementById('remover-finalizados');
const buttonSaveTasks = document.getElementById('salvar-tarefas');
const buttonRemoveSelect = document.getElementById('remover-selecionado');

// Criação de tarefa
buttonCriar.addEventListener('click', addTask);
function addTask() {
  if (input.value.length > 0) {
    const li = document.createElement('li');
    li.innerText = input.value;
    input.value = '';
    ol.appendChild(li);
  }
}

// Atividades selecionadas
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

// Atividades finalizadas
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

// Botão apagar tudo
let list = document.getElementsByTagName('li');
buttonApagar.addEventListener('click', deleteList);
function deleteList() {
  for(let index = list.length-1; index >= 0; index -= 1) {
    let element = list[index];
    ol.removeChild(element);
  }
}

// Botão apagar selecionado
let finalizados = document.getElementsByClassName('completed');
buttonDeleteFinal.addEventListener('click', deleteFinal);
function deleteFinal() {
  for(let index = finalizados.length-1; index >= 0; index -= 1) {
    let elementFinal = finalizados[index];
    ol.removeChild(elementFinal);
  }
}

// Botão apagar finalizados
let selecionados = document.getElementsByClassName('listSelected');
buttonRemoveSelect.addEventListener('click', deleteFinal);
function deleteFinal() {
  for(let index = selecionados.length-1; index >= 0; index -= 1) {
    let elementSelected = selecionados[index];
    ol.removeChild(elementSelected);
  }
}

/* // Botão salvar lista
buttonSaveTasks.addEventListener('click', saveTasks);
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(list));
}
//localStorage.clear();
// Chamada de função;
let ListSave = localStorage.getItem('tasks', JSON.parse(list));
    ol.parentNode(ListSave); */