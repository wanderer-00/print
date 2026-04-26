if ( document.getElementById('materialsList') ){
    const materialsList = document.getElementById('materialsList');

    for (m=0; m<materialData.length; m++) {
        if (m==0) {
            materialsList.innerHTML += `<button class="active">${materialData[m]}</button>`
        } else {
            materialsList.innerHTML += `<button>${materialData[m]}</button>`
        }
    };
};


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
    document.getElementById('vertex').innerHTML = `&otimes; ${totalVertices}`;
    document.getElementById('triangle').innerHTML = `&#9651; ${totalTriangles}`;



    // работа с материалами и их параметрами
    // Получаем массив всех материалов
    const materials = modelViewer.model.materials;

    materials.forEach((material, index) => {
        
//        const material_div = document.getElementById('material');
//        materialsList.innerHTML += `Материал №${index}: ${material.name}`;
        
        material.pbrMetallicRoughness.setMetallicFactor(0);
        material.pbrMetallicRoughness.setRoughnessFactor(1);
//        material.setEmissiveFactor([0, 0, 0]);
        
        // получение baseColor
        const color = material.pbrMetallicRoughness.baseColorFactor;
        console.log(`Цвет:`, color);
        
        const baseColor_div = document.getElementById('baseColor');
        baseColor_div.innerHTML = `rgba: (${color[0].toFixed(2)}, ${color[1].toFixed(2)}, ${color[2].toFixed(2)}, ${color[3].toFixed(2)})`;
        
        // Достаем значение metallicFactor
        const metallic_div = document.getElementById('metallic');
        
//        const metallic = material.pbrMetallicRoughness.metallicFactor;
//        metallic_div.innerHTML = `metallic: ${metallic}`;
    });
    
    // вывод списка материалов
    materialList(modelViewer);
    
    // вывод camera orbit
    cameraOrbit(modelViewer);
    
    // FPS
    showFPS(modelViewer);
    
    console.log(modelViewer.availableAnimations);
});