const buttonCriar = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
let li = document.querySelectorAll('.listUnselected');

buttonCriar.addEventListener('click', addTask);

function addTask() {
  if (input.value.length > 0) {
    const li = document.createElement('li');
    li.innerText = input.value;
    input.value = '';
    ol.appendChild(li);
  }

ol.addEventListener('click', colorTask);
function colorTask(event) {
  let selected = document.querySelector('.listSelected');
  if(selected === null){
    event.target.classList.add('listSelected');
  } else {
    selected.classList.remove('listSelected');
    event.target.classList.add('listSelected');
  }

}

}
// for (let key of li) {
//   key.addEventListener('click', selected);
//   function selected(event) {
//     key.classList.add('listSelected');
//   }
// }
// const TaskList = document.querySelectorAll('li');

// for (const key of TaskList) {
//     const element = key;
//     element.remove();
// }
