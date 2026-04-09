const count = document.getElementById('count');
const price = document.getElementById('price');

price.innerHTML = ` &#8381;`;

count.addEventListener('input', (event) => {
  // Получаем текущее значение через event.target.value
  price.innerHTML = `${event.target.value * 100} &#8381;`;
});