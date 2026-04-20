// что вставлять
const clusterData = [
    {
        "en": "tshirt",
        "ru": "Кепка",
        "count": 100,
        "price": 500
    },

    {
        "en": "hoodie",
        "ru": "Худи",
        "count": 100,
        "price": 500
    },

    {
        "en": "umbrella",
        "ru": "Зонт",
        "count": 100,
        "price": 500
    },

    {
        "en": "cap",
        "ru": "Кепка",
        "count": 100,
        "price": 500
    },

    {
        "en": "shopper",
        "ru": "Шоппер",
        "count": 100,
        "price": 500
    }
];

// куда вставлять
const cluster = document.getElementById('cluster');

// как вставлять
for ( i=0; i<clusterData.length; i++ ){
    cluster.innerHTML += `
        <button class="model-btn btn" data-model="${i.en}">${i.ru}</button>
        <button class="count" onclick="minus(${i.en})"><svg><use xlink:href="#mns"></use></svg></button>
        <input class="count" id="${i.en}" type="number" placeholder="? ?" min="1" max="5000" value="1">
        <button class="count" onclick="plus(${i.en})"><svg><use xlink:href="#pls"></use></svg></button>
        <div class="price" id="price-${i.en}"></div>
    `
};