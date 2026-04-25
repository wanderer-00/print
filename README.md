# NAME COMPANY
## используемые ресурсы
- [Google Fonts - иконки и шрифты](https://fonts.google.com/)
- [Model-viewer - проссмотр 3D моделей](https://modelviewer.dev/)
- [Blender - редактор 3D моделей](https://www.blender.org/)
- [SketchFab - 3D модели в роли заглушек](https://sketchfab.com/)
- [Mixamo - анимации для персонажей](https://www.mixamo.com/)
- Текстуры
  - [Polyhaven](https://polyhaven.com/)
  - [Ambientcg](https://ambientcg.com/)
  - [Sharetextures](https://www.sharetextures.com/)
  - [Cgbookcase](https://www.cgbookcase.com/)
  - [cc0-textures](https://cc0-textures.com/)
- [Khronos - разработчик GLTF формата, этот формат просто разъёб](https://www.khronos.org/gltf/)


## model-viewer
`src="3d/model.glb"`
`camera-orbit="$theta $phi $radius"`

theta (азимутальный угол)
Горизонтальное вращение камеры вокруг модели
Полный оборот = **360 deg** или **2π rad**

phi (полярный угол)
Вертикальный угол наклона камеры (угол сверху вниз)
Полный оборот = **360 deg** или **2π rad**

radius (радиус/дистанция)
Расстояние от камеры до центра модели (zoom)
В **метрах (m)**, **сантиметрах (cm)**, **миллиметрах (mm)**, **процентах (%)**. Например, 100% автоматически подберет такое расстояние, чтобы модель полностью вписывалась в окно просмотра. Ключевое слово **auto** вернет значение по умолчанию

`camera-orbit="100deg 90deg 2m"` означает, что камера повернута по горизонтали на 100 градусов, находится на уровне середины модели (90 градусов) и удалена от нее на 2 метра

Интересная фишка: Вы можете использовать CSS-функцию calc() и переменные окружения, чтобы, например, вращать модель при скролле страницы: camera-orbit="calc(30deg + env(window-scroll-y) * 60deg) 75deg 1.5m"

### camera-controls
включает возможность крутить модель мышкой
### touch-action
`touch-action="pan-y"` - позволяет прокручивать страницу касанием, если палец движется вертикально поверх модели
