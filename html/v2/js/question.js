const dataQuestionAnswer = [
    [
        "Как быстро я получу свой заказ?",
        "В день выдачи заказа, указанном в калькуляторе при совершении заказа"
    ],

    [
        "Дёшево ли у вас заказывать?",
        "Не уверен"
    ],

    [
        "Какие варианты доставки товара у вас есть?",
        "- По городу<br>- Срочная (такси за ваш счёт)"
    ],

    [
        "Какая минимальная сумма заказа?",
        "Посмотри в калькуляторе, для кого он тут"
    ]
];

const questionAnswer = document.getElementById('questionAnswer');

for (q = 0; q < dataQuestionAnswer.length; q++) {
	questionAnswer.innerHTML += `
        <div>
            <div class="question">
                <button class="q-btn" data-target="answer${q}">${dataQuestionAnswer[q][0]}
					<svg viewBox="0 0 16 16">
						<path d="M8 1v14" id="svg-answer${q}"></path>
						<path d="M1 8h14"></path>
					</svg>
				</button>
            </div>
            <div class="answer" id="answer${q}">
                <p>${dataQuestionAnswer[q][1]}</p>
            </div>
        </div>`
};

// Находим все кнопки
const buttons = document.querySelectorAll('.q-btn');

buttons.forEach(btn => {
	btn.addEventListener('click', () => {
		// Получаем id нужного блока из атрибута кнопки
		const targetId = btn.getAttribute('data-target');
		const targetDiv = document.getElementById(targetId);
		const icon = document.getElementById(`svg-${targetId}`);

		// Проверяем: если блок открыт — закрываем, если закрыт — открываем
		//		if (targetDiv.style.display === 'none') {
		//			targetDiv.style.display = 'block';
		//			icon.style.stroke = 'transparent';
		//		} else {
		//			targetDiv.style.display = 'none';
		//			icon.style.stroke = 'var(--text-color)';
		//		}

		// Переключаем класс (если есть — уберет, если нет — добавит)
		targetDiv.classList.toggle('is-open');
	});
});