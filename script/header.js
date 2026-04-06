const header = document.querySelector('header');

header.innerHTML = `
    <a href="index.html">
        <svg>
            <use xlink:href="#logo"></use>
        </svg>
        <p>LOGO</p>
    </a>

    <nav>
        <a href="#">О нас</a>
        <a href="#">Контакты</a>
        <a href="#">Портфолио</a>
        <a href="#"></a>
    </nav>
`