const ullogos = document.getElementsByClassName('ul-logos')[0];

const dataClients = [
    "KFU",
    "tatNeft"
];

for( i=0; i < 20; i++ ){
    ullogos.innerHTML += `
        <li style="--index: ${i};">
            <svg>
                <use xlink:href="#tatNeft"></use>
            </svg>
        </li>
    `
};