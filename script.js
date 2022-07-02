const criarHeader = () => {
  // Cria header
  const header = document.createElement('header');
  document.body.appendChild(header);
  // Cria H1
  const h1 = document.createElement('h1');
  h1.innerText = 'Minha Lista de Tarefas';
  header.appendChild(h1);
  // Cria P
  const p = document.createElement('p');
  p.id = 'funcionamento';
  p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  header.appendChild(p);
};
criarHeader();

const criaSectionMain = () => {
  // Cria section
  const section = document.createElement('section');
  document.body.appendChild(section);
  // Cria imput
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  section.appendChild(input);
  // Cria ol
  const ol = document.createElement('ol');
  ol.id = 'lista-tarefas';
  section.appendChild(ol);
};
criaSectionMain();

const criaNavegation1 = () => {
  const nav = document.createElement('nav');
  document.body.appendChild(nav);
  // Cria buttonAdd
  const buttonAdd = document.createElement('button');
  buttonAdd.id = 'criar-tarefa';
  buttonAdd.innerText = 'Adicionar';
  nav.appendChild(buttonAdd);
  // Cria buttonClear
  const buttonClear = document.createElement('button');
  buttonClear.id = 'apaga-tudo';
  buttonClear.innerText = 'Apagar lista';
  nav.appendChild(buttonClear);
  // Cria apagaFinalizados
  const buttonClearFinally = document.createElement('button');
  buttonClearFinally.id = 'remover-finalizados';
  buttonClearFinally.innerText = 'Apagar finalizados';
  nav.appendChild(buttonClearFinally);
};
criaNavegation1();

const nav = document.querySelector('nav');
const criaNavegation2 = () => {
  const buttonSave = document.createElement('button'); // Cria buttonSave
  buttonSave.id = 'salvar-tarefas';
  buttonSave.innerText = 'Salvar lista';
  nav.appendChild(buttonSave);
  const buttonClearMarcado = document.createElement('button'); // Cria apagarMarcado
  buttonClearMarcado.id = 'remover-selecionado';
  buttonClearMarcado.innerText = 'Apagar selecionado';
  nav.appendChild(buttonClearMarcado);
  // Cria buttonCima e buttonBaixo
  const buttonCima = document.createElement('button');
  buttonCima.id = 'mover-cima';
  buttonCima.innerText = 'Subir';
  nav.appendChild(buttonCima);
  const buttonBaixo = document.createElement('button');
  buttonBaixo.id = 'mover-baixo';
  buttonBaixo.innerText = 'Descer';
  nav.appendChild(buttonBaixo);
};
criaNavegation2();

// Campo de declaração de variáveis
const ol = document.querySelector('ol');
const buttonAdd = document.querySelector('#criar-tarefa');
const buttonClear = document.querySelector('#apaga-tudo');
const buttonClearFinally = document.querySelector('#remover-finalizados');
const buttonClearMarcado = document.querySelector('#remover-selecionado');
const buttonCima = document.querySelector('#mover-cima');
const buttonBaixo = document.querySelector('#mover-baixo');
const buttonSave = document.querySelector('#salvar-tarefas');
const input = document.querySelector('#texto-tarefa');

const saveList = (list) => localStorage.setItem('list', list);

const marcado = (event) => {
  const selected = document.querySelector('.listSelected');
  if (selected === null) event.target.classList.add('listSelected');
  else {
    selected.classList.remove('listSelected');
    event.target.classList.add('listSelected');
  }
};

const riscado = (event) => {
  const item = event.target;
  const itemClassList = item.classList;
  itemClassList.toggle('completed');
};

const initialize = () => {
  ol.innerHTML = localStorage.getItem('list');
  const element = ol.querySelectorAll('li');
  element.forEach((li) => {
    li.addEventListener('click', marcado);
    li.addEventListener('dblclick', riscado);
  });
};
initialize();

const adicionar = () => {
  buttonAdd.addEventListener('click', () => {
    // Cria li
    if (input.value.length > 0) {
      const li = document.createElement('li');
      li.id = 'lista-tarefas';
      li.innerText = input.value;
      li.addEventListener('click', marcado);
      li.addEventListener('dblclick', riscado);
      ol.appendChild(li);
      input.value = '';
    }
  });
};
adicionar();

const apagarTudo = () => {
  // Apagar Li
  buttonClear.addEventListener('click', () => {
    ol.innerHTML = '';
  });
};
apagarTudo();

const apagaRiscados = () => {
  buttonClearFinally.addEventListener('click', () => {
    const complets = document.querySelectorAll('.completed');
    complets.forEach((complet) => {
      complet.remove();
    });
  });
};
apagaRiscados();

const apagaMarcado = () => {
  buttonClearMarcado.addEventListener('click', () => {
    const selected = document.querySelector('.listSelected');
    selected.remove();
  });
};
apagaMarcado();

const salvarLista = () => {
  buttonSave.addEventListener('click', () => {
    saveList(ol.innerHTML);
  });
};
salvarLista();

const subir = () => {
  buttonCima.addEventListener('click', () => {
    const selected = document.querySelector('.listSelected');
    if (selected === null) {
      return;
    }
    const item = selected.previousElementSibling;
    if (item !== null) {
      const text = item.innerText;
      const classe = item.className;
      item.innerText = selected.innerText;
      item.className = selected.className;
      selected.innerText = text;
      selected.className = classe;
    }
  });
};
subir();

const descer = () => {
  buttonBaixo.addEventListener('click', () => {
    const selected = document.querySelector('.listSelected');
    if (selected === null) {
      return;
    }
    const item = selected.nextElementSibling;
    if (item !== null) {
      const text = item.innerText;
      const classe = item.className;
      item.innerText = selected.innerText;
      item.className = selected.className;
      selected.innerText = text;
      selected.className = classe;
    }
  });
};
descer();

// Referências:
//  NextElementSibling: https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling
//  PreviousElementSibling: https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling
//  Toggle: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
