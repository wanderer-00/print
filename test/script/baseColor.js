const colorPicker = document.querySelector('#color-picker');

colorPicker.addEventListener('input', (event) => {
    if (!modelViewer.model) return;

    // Конвертируем HEX в массив [r, g, b, a]
    const color = hexToRgb(event.target.value);

    // Применяем ко всем материалам
    modelViewer.model.materials.forEach((material) => {
        material.pbrMetallicRoughness.setBaseColorFactor(color);
    });
    
    // кол-во знаков после запятой
    const f = 2;
    
    const baseColor_div = document.getElementById('baseColor');
    baseColor_div.innerHTML = `rgba: (${color[0].toFixed(f)}, ${color[1].toFixed(f)}, ${color[2].toFixed(f)}, ${color[3].toFixed(f)})`;
});

// Функция для перевода HEX в формат 0-1
function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const a = 1; // непрозрачность (alpha) [0 - 1]
    return [r, g, b, a];
};

function setColor(color) {
    // загрузилась модель?
    if (!modelViewer.model) return;

    modelViewer.model.materials.forEach((material) => {
        material.pbrMetallicRoughness.setBaseColorFactor(color);
    });
    
    // Получаем доступ к сцене Three.js
    const symbols = Object.getOwnPropertySymbols(modelViewer);
    const sceneSymbol = symbols.find(s => s.description === 'scene');
    const scene = modelViewer[sceneSymbol];

    scene.traverse((obj) => {
        if (obj.isMesh) {
            // 1. Отключаем основную текстуру
            obj.material.map = null;

            // 2. Включаем режим сетки
            obj.material.wireframe = true;

            // 3. Красим ребра сетки
            obj.material.color.set('white'); // Ярко-зеленый

            obj.material.needsUpdate = true;
        }
    });
}