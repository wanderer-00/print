const metallicInput = document.querySelector('#metallic-range');

metallicInput.addEventListener('input', (event) => {
    // Проверяем, загрузилась ли модель
    if (!modelViewer.model) return;

    // Берем значение из ползунка (от 0 до 1)
    const value = parseFloat(event.target.value);

    // Применяем ко всем материалам модели (или выберите конкретный по индексу [0])
    modelViewer.model.materials.forEach((material) => {
        material.pbrMetallicRoughness.setMetallicFactor(value);
    });
});