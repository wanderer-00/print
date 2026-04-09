const count = document.getElementById('count');
const price = document.getElementById('price');

price.innerHTML = `100,00 &#8381;`;

count.addEventListener('input', (event) => {
    const summ = event.target.value * 100;
    
    // форматирование валюты
    const formatter = new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 2, // копейки
    });

  // Получаем текущее значение через event.target.value
  price.innerHTML = formatter.format(summ);
});