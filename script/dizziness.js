const display = document.getElementById('display');
const tasks = document.getElementById('task');

// обработка JSON
async function loadData() {
    try {
        const response = await fetch('data/dizziness.json'); // путь к файлу
        const data = await response.json(); // парсим JSON в объект JS
        console.log(data); // работаем с данными

        // заполнение заказов
        for (i = 0; i < data.length; i++) {
            tasks.innerHTML += `
                <div>${data[i][0]}</div>
            `;
            for (n = 0; n < data[i][1]; n++) {
                display.innerHTML += `<div class="a${i}"></div>`
            }
        }
        tasks.innerHTML += '<div>Ваш заказ</div>'

    } catch (error) {
        console.error('Ошибка загрузки:', error);
    }
}

loadData();
