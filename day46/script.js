const quizData = [
    {
        question:"Pasport necha yoshda beriladi?",
        a:"18",
        b:"16",
        c:"Hohlagan yoshda",
        d:"22",
        correct:"b",
    },
    {
        question:"Matematika asoschisi kim?",
        a:"al-Xorazmiy",
        b:"Z.M.Bobur",
        c:"Alisher Navoiy",
        d:"Mirzo Ulug'bek",
        correct:"a", 
    },
    {
        question:"(2+2*2-2)*1.5 ?",
        a:"4",
        b:"2",
        c:"6",
        d:"3",
        correct:"c", 
    },
    {
        question:"Bir sutkada necha daqiqa bor?",
        a:"86400",
        b:"1340",
        c:"2400",
        d:"To'g'ri javob berilmagan",
        correct:"d", 
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }
})

