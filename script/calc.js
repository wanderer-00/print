const count = document.getElementById('count');
const price = document.getElementById('price');
const UNIT_PRICE = 100;

// 1. Форматировщик (создаем один раз для производительности)
const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
});

// 2. Функция обновления UI
function updatePrice() {
    const summ = count.value * UNIT_PRICE;
    price.innerHTML = formatter.format(summ);
}

// 3. Обработчик ручного ввода
count.addEventListener('input', updatePrice);

// 4. Функции кнопок
function plus() {
    count.value = parseInt(count.value) + 1;
    updatePrice(); // Обновляем цену после изменения
}

function minus() {
    if (count.value > 1) {
        count.value -= 1;
        updatePrice(); // Обновляем цену после изменения
    }
}

// Инициализация при загрузке
updatePrice();