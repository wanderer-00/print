// Главный DOM-элемент, в который записывается финальный background-image.
const grid = document.querySelector(".grid-overlay");

// Карта контролов.
// ВАЖНО: ключи должны совпадать с id в HTML и с ключами в объекте settings ниже.
// Это упрощает поддержку и добавление новых параметров.
const controls = {
    lineColor: document.getElementById("lineColor"),
    lineAlpha: document.getElementById("lineAlpha"),
    diagColor: document.getElementById("diagColor"),
    diagAlpha: document.getElementById("diagAlpha"),
    crossColor: document.getElementById("crossColor"),
    crossAlpha: document.getElementById("crossAlpha"),
    crossThickness: document.getElementById("crossThickness")
};

// Генератор SVG-плитки (одной ячейки), которая повторяется по всей странице.
// Возвращает строку SVG, позже кодируется в data:image/svg+xml.
function buildTileSvg(cellSize, settings) {
    const c = cellSize / 2;
    const crossHalf = 10;

    return `
<svg xmlns="http://www.w3.org/2000/svg" width="${cellSize}" height="${cellSize}" viewBox="0 0 ${cellSize} ${cellSize}" fill="none">
<line x1="${c + 0.5}" y1="0" x2="${c + 0.5}" y2="${cellSize}" stroke="${settings.lineColor}" stroke-opacity="${settings.lineAlpha}" />
<line x1="0" y1="${c + 0.5}" x2="${cellSize}" y2="${c + 0.5}" stroke="${settings.lineColor}" stroke-opacity="${settings.lineAlpha}" />

<line x1="0.5" y1="0.5" x2="${cellSize - 0.5}" y2="${cellSize - 0.5}" stroke="${settings.diagColor}" stroke-opacity="${settings.diagAlpha}" stroke-dasharray="7 8" />
<line x1="0.5" y1="${cellSize - 0.5}" x2="${cellSize - 0.5}" y2="0.5" stroke="${settings.diagColor}" stroke-opacity="${settings.diagAlpha}" stroke-dasharray="7 8" />

<line x1="${c - crossHalf}" y1="${c + 0.5}" x2="${c + crossHalf}" y2="${c + 0.5}" stroke="${settings.crossColor}" stroke-opacity="${settings.crossAlpha}" stroke-width="${settings.crossThickness}" stroke-linecap="round" />
<line x1="${c + 0.5}" y1="${c - crossHalf}" x2="${c + 0.5}" y2="${c + crossHalf}" stroke="${settings.crossColor}" stroke-opacity="${settings.crossAlpha}" stroke-width="${settings.crossThickness}" stroke-linecap="round" />
<circle cx="${c + 0.5}" cy="${c + 0.5}" r="1.6" fill="${settings.crossColor}" fill-opacity="${settings.crossAlpha}" />
</svg>`.trim();
}

// Пересобирает фон сетки по текущим значениям контролов.
// Точка расширения: если добавляется новый контрол, его значение нужно
// включить в settings + использовать в buildTileSvg().
function refreshGrid() {
    const cell = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--cell")) || 160;
    const settings = {
        lineColor: controls.lineColor.value,
        lineAlpha: controls.lineAlpha.value,
        diagColor: controls.diagColor.value,
        diagAlpha: controls.diagAlpha.value,
        crossColor: controls.crossColor.value,
        crossAlpha: controls.crossAlpha.value,
        crossThickness: controls.crossThickness.value
    };
    grid.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(buildTileSvg(cell, settings))}")`;
}

// "Живое" обновление сетки при любом изменении ползунков/палитры.
Object.values(controls).forEach((el) => el.addEventListener("input", refreshGrid));

// Первичный рендер при загрузке страницы.
refreshGrid();