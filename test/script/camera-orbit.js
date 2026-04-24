function cameraOrbit(mv) {
    // label's
    let l_theta     = document.getElementById('l-theta');
    let l_phi       = document.getElementById('l-phi');
    let l_radius    = document.getElementById('l-radius');
    
    // input's
    let d_theta     = document.getElementById('theta');
    let d_phi       = document.getElementById('phi');
    let d_radius    = document.getElementById('radius');
    
    // Функция для перевода радианов в градусы
    const radToDeg = (rad) => Math.round(rad * (180 / Math.PI));

    mv.addEventListener('camera-change', () => {
        const orbit = mv.getCameraOrbit();

        const theta = radToDeg(orbit.theta);
        const phi = radToDeg(orbit.phi);
        const radius = orbit.radius.toFixed(2); // Округляем до 2 знаков

        // Выводим в формате, который можно сразу копировать в атрибут camera-orbit
        // X
        d_theta.value = theta;
        l_theta.innerHTML = `X = ${theta}&deg;`;
        // Y
        d_phi.value = phi;
        l_phi.innerHTML = `Y = ${phi}&deg;`;
        // R
        d_radius.value = radius;
        l_radius.innerHTML = `${radius}m`;
        
        
    });
    
    console.log('camera-orbit="theta phi radius"');
    
    console.log('p =', mv.getCameraOrbit().phi);
    console.log('t =', mv.getCameraOrbit().theta);
    console.log('r =', mv.getCameraOrbit().radius);
}