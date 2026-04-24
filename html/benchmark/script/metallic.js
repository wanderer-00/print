// Металличность
const metallicInput = document.querySelector('#metallic-range');

metallicInput.addEventListener('input', (event) => {
    // Проверяем, загрузилась ли модель
    if (!modelViewer.model) return;

    // Берем значение из ползунка (от 0 до 1)
    const value = parseFloat(event.target.value);
    const metallic_value = document.getElementById('metallic_value');
    metallic_value.innerHTML= value.toFixed(1);

    // Применяем ко всем материалам модели (или выберите конкретный по индексу [0])
    modelViewer.model.materials.forEach((material) => {
        material.pbrMetallicRoughness.setMetallicFactor(value);
    });
});


// Шероховатость
const roughnessInput = document.querySelector('#roughness-range');

roughnessInput.addEventListener('input', (event) => {
    // Проверяем, загрузилась ли модель
    if (!modelViewer.model) return;

    // Берем значение из ползунка (от 0 до 1)
    const value = parseFloat(event.target.value);
    const roughness_value = document.getElementById('roughness_value');
    roughness_value.innerHTML= value.toFixed(1);

    // Применяем ко всем материалам модели (или выберите конкретный по индексу [0])
    modelViewer.model.materials.forEach((material) => {
        material.pbrMetallicRoughness.setRoughnessFactor(value);
    });
});