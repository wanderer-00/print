const dataQuestionAnswer = [
    [
        "#1 Lorem ipsum dolor sit amet?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate modi voluptatibus numquam fugit dolor tempore perspiciatis iste repudiandae, velit molestias, necessitatibus fuga, sint laboriosam hic autem reprehenderit nostrum ut doloribus."
    ],

    [
        "#2 Lorem ipsum dolor sit amet?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate modi voluptatibus numquam fugit dolor tempore perspiciatis iste repudiandae, velit molestias, necessitatibus fuga, sint laboriosam hic autem reprehenderit nostrum ut doloribus."
    ],

    [
        "#3 Lorem ipsum dolor sit amet?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate modi voluptatibus numquam fugit dolor tempore perspiciatis iste repudiandae, velit molestias, necessitatibus fuga, sint laboriosam hic autem reprehenderit nostrum ut doloribus."
    ],

    [
        "#4 Lorem ipsum dolor sit amet?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate modi voluptatibus numquam fugit dolor tempore perspiciatis iste repudiandae, velit molestias, necessitatibus fuga, sint laboriosam hic autem reprehenderit nostrum ut doloribus."
    ]
];

const questionAnswer = document.getElementById('questionAnswer');

for ( q=0; q < dataQuestionAnswer.length; q++ ) {
    questionAnswer.innerHTML += `
        <div>
            <h4 class="question">
                <button>${dataQuestionAnswer[q][0]}</button>
            </h4>
            <div class="answer">
                <p>${dataQuestionAnswer[q][1]}</p>
            </div>
        </div>`
}