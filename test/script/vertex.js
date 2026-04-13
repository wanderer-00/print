const modelViewer = document.querySelector('model-viewer');

modelViewer.addEventListener('load', () => {
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
});