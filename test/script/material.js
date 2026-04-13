let modelViewer = document.getElementsByTagName('model-viewer')[0];

modelViewer.addEventListener('load', () => {

    // получение количества вершин и полигонов
    const symbols = Object.getOwnPropertySymbols(modelViewer);
    const sceneSymbol = symbols.find(s => s.description === 'scene');
    const scene = modelViewer[sceneSymbol];

    let totalVertices = 0;
    let totalTriangles = 0;

    scene.traverse((object) => {
        if (object.isMesh) {
            const geometry = object.geometry;

            // 1. Считаем вершины
            if (geometry.attributes.position) {
                totalVertices += geometry.attributes.position.count;
            }
            
            // 2. Считаем треугольники
            if (geometry.index !== null) {
                totalTriangles += geometry.index.count / 3;
            } else {
                totalTriangles += geometry.attributes.position.count / 3;
            }
        }
    });
    // Вывод результатов
    document.getElementById('vertex').innerHTML = `Вершины ${totalVertices}`;
    document.getElementById('triangle').innerHTML = `△ ${totalTriangles}`;



    // работа с материалами и их параметрами
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
        
        // Достаем значение metallicFactor
        const metallic_div = document.getElementById('metallic');
        
        const metallic = material.pbrMetallicRoughness.metallicFactor;
        metallic_div.innerHTML = `metallic: ${metallic}`;
    });
});