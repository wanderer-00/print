const footer = document.querySelector('footer');

footer.innerHTML = `
        <div>
            <h2>About</h2>
            <p>
                Привет... Мы маленькая, но прогрессивная типография в Казани, ориентированная, как на малые тиражи, так и на крупные. Мы стремимся к оптимизации процессов, поэтому в нашем штате 3 человека:
                &#129398; Я, &#128526; мой босс - Большой человек с Большими друзьями и &#128105; бухгалтер - человек по контролю авторского права. Большой штат сотрудников не всегда гарантирует скорость и надёжность производства. Упорство и острый ум творит чудеса бизнеса. пока
            </p>
        </div>
        
        <div>
            <h2>Contact's</h2>
            <ul>
                <li><a href="#">print@gmail.com</a></li>
                <li><a href="tel:+79872972282">+7(987)297-22-82</a></li>
            </ul>
        </div>
        
        <div>
            <h1>Copyright © 2026</h1>
            <p> Ничто никому не принадлежит)</p>
        </div>
        
        <div>
            <h2>Powered By</h2>
            <a href="https://fonts.google.com/icons" aria-label="Google Fonts">
                <svg>
                    <use xlink:href="#googleFonts"></use>
                </svg>
            </a>

            <a href="https://modelviewer.dev/" aria-label="Google model viewer">
                <svg>
                    <use xlink:href="#modelviewer"></use>
                </svg>
            </a>
        </div>
`;