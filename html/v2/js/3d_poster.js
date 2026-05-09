const modelViewer = document.getElementById('3D-poster');

modelViewer.addEventListener('load', () => {
    // Получаем первый материал модели
    const material = modelViewer.model.materials[0];

    // 1. Устанавливаем ярко-красный цвет (RGBA)
    material.pbrMetallicRoughness.setBaseColorFactor([1, 0, 0, 1]);

    // 2. Делаем поверхность идеально гладкой (глянец)
    material.pbrMetallicRoughness.setRoughnessFactor(0);

    // 3. Добавляем эффект прозрачности (стекла)
    // Примечание: для полноценного стекла лучше использовать расширение KHR_materials_transmission
    // material.setAlphaMode("BLEND");

    // 4. Добавляем свечение (Emissive), чтобы модель "горела" изнутри как в игре
    material.setEmissiveFactor([0, 0, 0]);
});

window.addEventListener('mousemove', (event) => {
    // Вычисляем положение курсора в процентах от центра экрана
    // x и y будут в диапазоне от -0.5 до 0.5
    const x = (event.clientX / window.innerWidth) - 0.5;
    const y = (event.clientY / window.innerHeight) - 0.5;

    // Задаем максимальный угол поворота (например, 45 градусов в каждую сторону)
    const maxDeg = 70;

    // Формируем значения для горизонтального (theta) и вертикального (phi) вращения
    const theta = 0 + (x * maxDeg * -1); // 90 — это центр по горизонтали
    //const phi = 90 + (y * maxDeg);   // 75 — комфортный угол наклона сверху
    const phi = 90;
    // Применяем новые координаты камеры
    modelViewer.cameraOrbit = `${theta}deg ${phi}deg auto`;
});

window.addEventListener('deviceorientation', (event) => {
  // Получаем данные поворота
  // gamma: наклон влево/вправо (-90 до 90)
  // beta: наклон вперед/назад (-180 до 180)
  // alpha: компас (0 до 360)
  
  const gamma = event.gamma; 
  const beta = event.beta;

  // Рассчитываем новую орбиту камеры
  // Умножаем на коэффициент, чтобы скорость вращения была приятной
  let newOrbit = `${gamma * 2}deg 75deg 105%`;
  
  modelViewer.cameraOrbit = newOrbit;
});