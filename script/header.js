const header = document.querySelector('header');

header.innerHTML = `
    <a href="index.html" aria-label="На главную страницу">
        <svg>
            <use xlink:href="#logo"></use>
        </svg>
    </a>

    <nav>
        <a href="#">О нас</a>
        <a href="#">Контакты</a>
        <a href="#">Портфолио</a>
    </nav>
`