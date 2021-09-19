'use strict'

{

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