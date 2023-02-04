const list = document.querySelector('.list');
list.addEventListener('click', function (event) {
  const trigger = event.target.closest('span');
  if (trigger) {
    trigger.classList.toggle('hide');
  }
});

const listAdd = document.querySelector('#list-add');
listAdd.addEventListener('click', function (event) {
let listLength = Array.prototype.slice.call(list.getElementsByClassName("inner_list")).length;
let listItemsLength = Array.prototype.slice.call(list.getElementsByClassName("list_item")).length;
listLength++;
  const li = document.createElement('li');
  li.innerHTML = '<span class="hide inner_list">' +
  `${listLength} список</span>` +
  '<ul>' +
  `<li class="list_item">${listItemsLength + 1}-й  елемент списку</li>` +
  `<li class="list_item">${listItemsLength + 2}-й  елемент списку</li>` +
  `<li class="list_item">${listItemsLength + 3}-й  елемент списку</li>`
  list.appendChild(li);
});







