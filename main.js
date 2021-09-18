'use strict'

{
//  const a = 10;
//  const z = 6;

//  if (a >= 9 && z >= 9) {
//   console.log('OK!');
//  } else {
//    console.log('bad...');
//  }

//  const button = document.getElementById('button');
//  const start = document.querySelector('h1');

//  button.addEventListener('click', ()=> {
//    let name = prompt('名前を入力してください');
//    start.textContent=  name + 'さん';
//  })

const button = document.getElementById('button');
const input = document.getElementById('input');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  const todo = document.createElement('p');
  const remove = document.createElement('button');
  const checked = document.createElement('input');
  checked.setAttribute('type', 'checkbox');
  
  todo.textContent = input.value;
  const ul = document.querySelector('ul');
  ul.appendChild(li);
  li.appendChild(checked);
  li.appendChild(todo);
  li.appendChild(remove);
  remove.innerText = '削除';
  input.value = '';

  remove.addEventListener('click', () => {
    ul.removeChild(li);
  });
});





}