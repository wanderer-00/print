modelViewer.addEventListener('load', () => {
    // Получаем массив всех материалов
    const materials = modelViewer.model.materials;

    materials.forEach((material, index) => {
        const material_div = document.getElementById('material');
        material_div.innerHTML = `Материал №${index}: ${material.name}`;

        // получение baseColor
        const color = material.pbrMetallicRoughness.baseColorFactor;
        console.log(`Цвет:`, color);
        
        // baseColor
        const baseColor_div = document.getElementById('baseColor');
        baseColor_div.innerHTML = `rgba: ( ${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`;
    });
});