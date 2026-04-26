function showFPS(mv) {
    // если захочу переименовать ID
//    const nameID = 'static-info';
//
//    if ( document.getElementById(nameID) ) {
//        const staticInfo = document.getElementById(nameID);
//        console.log('элемент существует');
//    } else {
//        let staticInfo = document.createElement('div');
//        staticInfo.setAttribute('id', nameID);
//        mv.append(staticInfo);
//        console.log('элемент не существует, создан');
//    };

    const fps_div = document.getElementById('fps');

    let frames = 0;
    let lastTime = performance.now();


    function countFPS() {
        frames++;
        let now = performance.now();

        // Если прошла 1 секунда (1000 мс)
        if (now >= lastTime + 1000) {
            let fps = Math.round((frames * 1000) / (now - lastTime));

            fps_div.innerHTML = `FPS ${fps}`;

            frames = 0;
            lastTime = now;
        }

        requestAnimationFrame(countFPS);
    }

    requestAnimationFrame(countFPS);
};