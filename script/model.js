const viewer = document.getElementsByTagName('model-viewer')[0];
const buttons = document.querySelectorAll('.model-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // 1. Берем путь из атрибута нажатой кнопки
        const modelPath = button.getAttribute('data-model');

        // 2. Меняем модель в просмотрщике
        viewer.src = modelPath;

        // 3. (Опционально) Подсвечиваем активную кнопку
//        buttons.forEach(btn => btn.classList.remove('active'));
//        button.classList.add('active');
    });
});
