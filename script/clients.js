const ullogos = document.getElementsByClassName('ul-logos')[0];

for(i=0; i<20; i++){
    ullogos.innerHTML += `
        <li style="--index: ${i};">
            <svg>
                <use xlink:href="#KFU"></use>
            </svg>
        </li>
    `
};