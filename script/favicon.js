function setDynamicFavicon(count) {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');

    // 1. Рисуем основную иконку (или просто фон)
    ctx.fillStyle = 'white'; // Синий фон
    ctx.fillRect(0, 0, 32, 32);

    // 2. Если есть уведомления, рисуем красный индикатор
    if (count > 0) {
        ctx.beginPath();
        ctx.arc(16, 16, 16, 0, 2 * Math.PI);
        ctx.fillStyle = 'black';
        ctx.fill();

        // 3. Добавляем текст (число)
        ctx.fillStyle = 'white';
        ctx.font = 'bold 32px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(count > 9 ? count : count, 16, 28);
    }

    // 4. Обновляем саму иконку в HTML
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = canvas.toDataURL('image/png');
}
setDynamicFavicon(1);




let counter = 0;
const maxRepeats = 99;

const myTimer = setInterval(() => {
    counter++;
    setDynamicFavicon(counter);

    if (counter === maxRepeats) {
        clearInterval(myTimer); // Останавливаем "цикл"
        console.log("Готово!");
    }
}, 1000);
