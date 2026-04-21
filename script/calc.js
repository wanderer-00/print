// что вставлять
const d = [
    {
        "en": "tshirt",
        "ru": "Футболка",
        "count": 5000,
        "price": 500,
        "camera": [100,	90,	4]
    },

    {
        "en": "hoodie",
        "ru": "Худи",
        "count": 5000,
        "price": 1500,
        "camera": [0, 90, 12]
    },

    {
        "en": "umbrella",
        "ru": "Зонт",
        "count": 5000,
        "price": 800,
        "camera": [100,	90,	4]
    },

    {
        "en": "cap",
        "ru": "Кепка",
        "count": 5000,
        "price": 300,
        "camera": [45,	90,	4]
    },

    {
        "en": "shopper",
        "ru": "Шоппер",
        "count": 5000,
        "price": 200,
        "camera": [0, 90, 4]
    }
];

// куда вставлять
const calc = document.getElementById('calc');

// как вставлять
for (i = 0; i < d.length; i++) {
    calc.innerHTML += `
    <button class="btn" data-model="${d[i].en}">${d[i].ru}</button>

    <button
        class="count-btn"
        id="${d[i].en}-mns"
        data-btn="${d[i].en}"
        data-sign="mns"
        >

        <svg>
            <use xlink:href="#mns"></use>
        </svg>
    </button>

    <input
        class="count"
        data-btn="${d[i].en}"
        id="${d[i].en}-count"
        type="number"
        placeholder="кол-во"
        min="0"
        max="5000"
        value="0"
    >

    <button
        class="count-btn"
        data-btn="${d[i].en}"
        id="${d[i].en}-pls"
        data-btn="${d[i].en}"
        data-sign="pls"
        >

        <svg>
            <use xlink:href="#pls"></use>
        </svg>
    </button>

    <div class="price" id="${d[i].en}-price">0 &#8381;</div>
`
};

// формируем чек
const check = document.getElementById('check');

function checkSumm(){
    const prices = document.querySelectorAll('.price');
    // суммарная цена
    let summPrice = 0;
    for( i=0; i<prices.length; i++ ){
        const str = prices[i].textContent;
        const number = parseInt(str.replace(/\s/g, ''), 10);
        summPrice = summPrice + number;
    };
    return summPrice;
};

// форматируем цену: XXX XXX ₽
const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
});

function updatePrice(input, price, priceUnit) {
    const summ = input.value * priceUnit;
//        price.innerHTML = formatter.format(summ);
    price.innerHTML = formatter.format(summ);

    check.innerHTML = `Итог: ${formatter.format(checkSumm())}`;
};

// ограничение на ввод с клавиатуры
const countInp = document.querySelectorAll('.count');

countInp.forEach(input => {
    input.addEventListener('change', (event) => {
        // input
        const countInp = event.target;
        // data
        const data_btn = event.target.getAttribute('data-btn');
        // получение поля цены
        const price = document.getElementById(`${data_btn}-price`);

        const max = d.find(item => item.en == data_btn)?.count;
        const priceUnit = d.find(item => item.en == data_btn)?.price;

        if ( countInp.value > max ) {
            countInp.value = max;
        }
        else if(countInp.value < 1) {
            countInp.value = 1;
        }
        updatePrice(countInp, price, priceUnit);

})});

// орбита камеры
const mv = document.getElementsByTagName('model-viewer')[0];
const mbtn = document.querySelectorAll('.btn');

// camera orbit
const co = {
    "hoodie":	[0,		90,	12],
    "tshirt":	[100,	90,	4],
    "umbrella":	[100,	90,	4],
    "cap":		[45,	90,	4],
    "shopper":	[0,		90,	4]
};

mbtn.forEach(button => {
    button.addEventListener('click', () => {

        // берем путь из атрибута нажатой кнопки (model path)
        const mp = button.getAttribute('data-model');

        // смена 3D модели
        mv.src = `3d/${mp}.glb`;

        // изменение орбиты камеры под каждую модель
        mv.addEventListener('load', () => {
            mv.cameraOrbit = `${co[mp][0]}deg ${co[mp][1]}deg`;
            console.log(`${mp}.glb: ${co[mp][0]}deg ${co[mp][1]}deg`);


        });
    });
});





// сбор всех кнопок
const countBtn = document.querySelectorAll('.count-btn');

countBtn.forEach(button => {
    button.addEventListener('click', () => {

        // узнаём какой товар изменяем
        const data_btn = button.getAttribute('data-btn');
        // определяем будет вычитание или сложение
        const data_sign = button.getAttribute('data-sign');

        // получение поля кол-во
        const countInput = document.getElementById(`${data_btn}-count`);
        // получение поля цены
        const countPrice = document.getElementById(`${data_btn}-price`);
        // получение максимального кол-ва товара
        const maxCount = d.find(item => item.en == data_btn)?.count;
        // цена товара
        const priceUnit = d.find(item => item.en == data_btn)?.price;

        // изменение цены
        priceChange( countInput, maxCount, data_sign );
        // обновление цены
        updatePrice( countInput, countPrice, priceUnit);
    });
});

function priceChange(input, max, sign){
    if ( sign=="pls" ) {
        if(parseInt(input.value) + 1 <= max) {
            input.value = parseInt(input.value) + 1;
        };
    } else if( sign=="mns" ) {
        if ( parseInt(input.value) > 0) {
            input.value = parseInt(input.value) - 1;
        };
    } else {

    };
};