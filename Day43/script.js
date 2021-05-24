const ratings = document.querySelectorAll('.rating')
const ratingContainer = document.querySelector('.rating-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedrating = 'Satisfied'

ratingContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedrating = e.target.nextElementSibling.innerHTML
        console.log(selectedrating)
    }
})

sendBtn.addEventListener('click' ,(e) => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedrating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++){
        ratings[i].classList.remove('active')
    }
}