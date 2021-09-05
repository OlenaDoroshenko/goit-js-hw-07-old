// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const list = document.querySelector('ul');

// const addListItems = array =>
//   ingredients.map(ingredient => {
//     const listItem = document.createElement(`li`);
//     listItem.textContent = ingredient;
//     return listItem;
//   });

// list.append(...addListItems(ingredients));


const dishes = ingredients.map(ingredient => {
  const listItem = document.createElement(`li`);
  listItem.textContent = ingredient
  return listItem;
});

console.log(dishes);
list.append(...dishes);

