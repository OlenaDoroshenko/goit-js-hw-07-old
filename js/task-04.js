// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
{/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */}


// const decrement = document.querySelector('[data-action="decrement"]');

function getCounter(){
  let counterValue = 0;

  function increment() {
    counterValue+=1;
    return counterValue;
  }

  function decrement() {
    counterValue-=1;
    return counterValue;
  }

return {increment, decrement}
};

const counter = getCounter();
console.log(counter);


document.querySelector('[data-action="increment"]').addEventListener('click',()=>{
  document.querySelector('#value').textContent = counter.increment();
});
document.querySelector('[data-action="decrement"]').addEventListener('click',()=>{
  document.querySelector('#value').textContent = counter.decrement();
});
