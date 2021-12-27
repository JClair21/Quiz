const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [{
        question: 'Commonly used date types DO NOT Include:',
        choice1: 'strings',
        choice2: 'booleans',
        choice3: 'alerts',
        choice4: 'numbers',
        answer: 2,
    },
    {
        question: 'Arrays in JavsScript can be used to store _____:',
        choice1: 'strings',
        choice2: 'booleans',
        choice3: 'alerts',
        choice4: 'All of the above',
        answer: 4,
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is: ',
        choice1: 'JavaScript',
        choice2: 'terminal/bash',
        choice3: 'for loops',
        choice4: 'console log',
        answer: 4,

    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables.',
        choice1: 'commas',
        choice2: 'curly brackets',
        choice3: 'quotes',
        choice4: 'parenthesis',
        answer: 3,
    },
    {
        question: 'The condition in an if/else statement is enclosed with ______:',
        choice1: 'quotes',
        choice2: 'curly brackets',
        choice3: 'parenthesis',
        choice4: 'square brackets',
        answer: 2,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestions()
}

getNewQuestion = () => {
    if (avaiableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }
    questionCounter++
    progressText.innerText = 'Question ${questionCuonter} of ${MAX_QUESTIONS}'
    progressBarFull.getElementsByClassName.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'

    const questionsIndex = math.floor(Mathg.random() * availableQuestoins.length)
    currentQuestion = availableQuestions[questinindex]
    question.InnerText = currentQuestion.question

    choices.forEach(chaoice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectChoice = e.target
        const selectAnswer = selectChoice.dataset['number']

        let classToApply = selectdAnswer == currentQuestion.answer ? 'correct' :
            'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)
        getNewQuestion()

    }, 1000)
})

incremebtScore = num => {
    score += numscoreText.innerText = score
}