const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')


const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData , 2500)

function getData() {
    header.innerHTML = '<img src="https://learnworthy.net/wp-content/uploads/2019/10/10-things-every-programmer-should-know.jpg" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum non enim quia? Maiores, consequuntur.'
    profile_img.innerHTML = '<img src="https://image.shutterstock.com/image-vector/code-logo-coder-company-260nw-1153170794.jpg" alt="">'
    name.innerHTML = 'Bahrom Nasurullayev'
    date.innerHTML='May, 08, 2021'

    animated_bgs.forEach(bg => bg.classList.remove('animeted-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animeted-bg-text'))
}