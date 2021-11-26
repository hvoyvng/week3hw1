const startButton = document.querySelector('#start-btn')
const nextButton = document.querySelector('#next-btn')
const questionContainerElement = document.querySelector('#question-container')
let currentQuestionState = 0
var scores = document.querySelector('#scores')
var scores = 0
let highScore = JSON.parse(localStorage.getItem('highscoreArr')) || []
const scoreboardElem = document.getElementById('scoreboard')
const scoreButton = document.getElementById('enterScore')


const startingMinutes = 5
let time = startingMinutes * 60
const counterElement = document.querySelector('#counter')
setInterval(updateCounter, 1000)
function updateCounter() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    seconds = seconds < 10 ? '0' + seconds : seconds
    counterElement.innerHTML = `${minutes}: ${seconds}`
    time--
}
const questions = [
    {
        question: 'Where do you put javascripts?',
        answers: [
            {text: 'In the head or body sections'},
            {text: 'In a h1 tag'},
            {text: 'In the stylesheet'},
            {text: 'Anywhere'},
            {correct: 'a'}
        ]
    },
    {
        question: 'What does HTML stand for?',
        answers: [
            {text: 'Hide the Mother Load'},
            {text: 'HyperText Markup Language'},
            {text: 'HydroText Markup Language'},
            {text: 'None of the above'},
            {correct: 'b'}
        ]
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            {text: 'Containing StyleSheets'},
            {text: 'Combat Service Support'},
            {text: 'Churg-Strauss Syndrome'},
            {text: 'Cascading StyleSheets'},
            {correct: 'd'}
        ]
    },
    {
        question: 'Bootstrap is a framwork for what?',
        answers: [
            {text: 'HTML'},
            {text: 'CSS'},
            {text: 'Javascript'},
            {text: 'Python'},
            {correct: 'b'}
        ]
    },
    {
        question: 'When did Javascript first appear?',
        answers: [
            {text: '1995'},
            {text: '1996'},
            {text: '2001'},
            {text: '1993'},
            {correct: 'a'}
        ]
    },
    {
        question: 'Is Javascript easy to learn?',
        answers: [
            {text: 'Yes'},
            {text: 'No'},
            {text: 'Yes'},
            {text: 'Yes'},
            {correct: 'b'}
        ]
    }
]

startButton.addEventListener('click', startGame) 

function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    document.querySelector('#question').innerHTML = questions[currentQuestionState].question
    document.querySelector('#answer1').innerHTML = questions[currentQuestionState].answers[0].text
    document.querySelector('#answer2').innerHTML = questions[currentQuestionState].answers[1].text
    document.querySelector('#answer3').innerHTML = questions[currentQuestionState].answers[2].text
    document.querySelector('#answer4').innerHTML = questions[currentQuestionState].answers[3].text
    nextButton.classList.remove('hide')
    nextButton.addEventListener('click', nextQuestion)
}

function nextQuestion() {
    currentQuestionState++
    if (currentQuestionState < 6) {
        document.querySelector('#question').innerHTML = questions[currentQuestionState].question
        document.querySelector('#answer1').innerHTML = questions[currentQuestionState].answers[0].text
        document.querySelector('#answer2').innerHTML = questions[currentQuestionState].answers[1].text
        document.querySelector('#answer3').innerHTML = questions[currentQuestionState].answers[2].text
        document.querySelector('#answer4').innerHTML = questions[currentQuestionState].answers[3].text
    } else{
        questionContainerElement.classList.add('hide')
        scoreboardElem.classList.remove('hide')
    }
}

scoreButton.addEventListener('click', showScorepage)

function showScorepage() {
    let scoreName = document.getElementById('scoreInp').value
    let scoreObj = 
        {name: scoreName,
        score: scores}
    highScore.push(scoreObj)
    localStorage.setItem('highscoreArr', JSON.stringify(highScore))
    document.getElementById('listItem').innerHTML = `
            ${localStorage.getItem('name')}
    `
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestionState].answers[4].correct) {
        scores++
    }
    else {
        scores--
    }
    document.querySelector('#scores').innerHTML = `Scores: ${scores}`
}

