const burger = document.getElementById('burger');
const nav = document.getElementsByClassName('nav')[0];

burger.addEventListener('click', () => {
	// Переключаем класс 'open' у меню и самого бургера (для анимации)
//	nav.classList.toggle('open');
	burger.classList.toggle('active');
});