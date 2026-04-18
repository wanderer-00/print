const mv = document.getElementsByTagName('model-viewer')[0];
const mbtn = document.querySelectorAll('.model-btn');

// camera orbit
const co = {
    "hoodie":	[0,		90,	12],
    "tshirt":	[100,	90,	4],
    "umbrella":	[100,	90,	4],
    "cap":		[45,	90,	4],
    "shopper":	[0,		90,	4]
};

mbtn.forEach(button => {
    button.addEventListener('click', () => {

		// берем путь из атрибута нажатой кнопки (model path)
        const mp = button.getAttribute('data-model');

        // смена 3D модели
        mv.src = `3d/${mp}.glb`;
		
		mv.addEventListener('load', () => {
			// изменение орбиты камеры под каждую модель
			mv.cameraOrbit = `${co[mp][0]}deg ${co[mp][1]}deg`;
			console.log(`${mp}.glb: ${co[mp][0]}deg ${co[mp][1]}deg`);
		});
    });
});
