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
};

// максимальный count
const max = 5000;

const inputCount = document.getElementById('count');
inputCount.addEventListener('change', (e) => {
    if ( e.target.value > max ) {
        e.target.value = max;
    }
    else if(e.target.value < 1) {
        e.target.value = 1;
    }
    updatePrice();
});

// 4. Функции кнопок
function plus() {
    if( parseInt(count.value) + 1 <= max) {
        count.value = parseInt(count.value) + 1;
        updatePrice(); // Обновляем цену после изменения
    } else { return };

}

function minus() {
    if (count.value > 1) {
        count.value -= 1;
        updatePrice(); // Обновляем цену после изменения
    }
}

// Инициализация при загрузке
updatePrice();