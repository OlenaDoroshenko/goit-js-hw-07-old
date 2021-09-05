// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) 
// и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


const categories = document.querySelectorAll(".item");
console.log(`В списке ${categories.length} категории`);

document.querySelectorAll(".item h2").forEach(item =>console.log(`Категория: ${item.textContent}, 
Количество элементов: ${item.nextElementSibling.children.length}`));

categories.forEach(category => console.log(`Категория: ${category.firstElementChild.textContent}, 
Количество эелементов: ${category.lastElementChild.children.length}`));



