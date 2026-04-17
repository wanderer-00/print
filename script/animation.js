const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const parent = canvas.parentElement; // Берем родительский блок

let particles = [];
const connectionDistance = 70; // Дистанция, при которой появляется линия
const particleCount = 30; // Количество шариков

// Подгоняем размер под окно
function resize() {
    // Получаем коэффициент масштабирования (2 для Retina, 1 для обычных)
    const ratio = window.devicePixelRatio || 1;
    
    // Устанавливаем физический размер канваса (с учетом пикселей экрана)
    canvas.width = parent.offsetWidth * ratio;
    canvas.height = parent.offsetHeight * ratio;
    
    // Устанавливаем визуальный размер через CSS (как он выглядит в блоке)
    canvas.style.width = parent.offsetWidth + 'px';
    canvas.style.height = parent.offsetHeight + 'px';
    
    // Масштабируем контекст отрисовки, чтобы все координаты работали корректно
    ctx.scale(ratio, ratio);
}
window.addEventListener('resize', resize);
resize();

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.2; // Скорость по X
        this.vy = (Math.random() - 0.5) * 0.2; // Скорость по Y
        this.radius = 2;
    }

    draw() {
        ctx.fillStyle = 'rgba(46, 21, 36, 1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Отскок от краев
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
}

function init() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        // Проверяем расстояние между парами точек
        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
                // Рисуем линию, прозрачность зависит от дистанции
//                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / connectionDistance})`;
                ctx.strokeStyle = `rgba(46, 21, 36, 1)`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animate);
}

init();
animate();