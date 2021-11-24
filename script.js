const buttonCriar = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
let li = document.querySelectorAll('.listUnselected');

buttonCriar.addEventListener('click', addTask);

function addTask() {
  if (input.value.length > 0) {
    const li = document.createElement('li');
    li.innerText = input.value;
    li.className = 'listUnselected';
    input.value = '';
    ol.appendChild(li);
  }

ol.addEventListener('click', selected);

function selected(event){
  if(event.target.className.indexOf('listUnselected') !== -1) {
    const selected = document.querySelectorAll('.listUnselected');
    if (selected.length > 0) {
      selected[0].classList.remove('listUnselected');
      event.target.classList.add('listSelected');
    }
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
