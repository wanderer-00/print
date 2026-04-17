const colorPicker = document.querySelector('#color-picker');

colorPicker.addEventListener('input', (event) => {
    if (!modelViewer.model) return;

    // Конвертируем HEX в массив [r, g, b, a]
    const color = hexToRgb(event.target.value);

    // Применяем ко всем материалам
    modelViewer.model.materials.forEach((material) => {
        material.pbrMetallicRoughness.setBaseColorFactor(color);
    });

    const baseColor_div = document.getElementById('baseColor');
    baseColor_div.innerHTML = `rgba: ( ${color[0].toFixed(1)}, ${color[1].toFixed(1)}, ${color[2].toFixed(1)}, ${color[3].toFixed(1)})`;
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

    modelViewer.model.materials.forEach((material[0]) => {
        material.pbrMetallicRoughness.setBaseColorFactor(color);
    });
}