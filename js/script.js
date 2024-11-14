function toggleMenu() {
    const menu = document.querySelector('.menu__list')

    if (menu.classList.contains('active')) {

        menu.style.opacity = '0'
        setTimeout(() => {
            menu.classList.remove('active')
        }, 300)
    } else {

        menu.classList.add('active')
        setTimeout(() => {
            menu.style.opacity = '1'
        }, 10)
    }
}

/****************************************************** */

let currentIndex = 0
const slides = document.querySelectorAll('.reviews__sliders')
const totalSlides = slides.length

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none'
    })
    updateDots(index) 
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides
    showSlide(currentIndex)
}

function createDots() {
    const dotsContainer = document.querySelector('.dots') 
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span')
        dot.classList.add('dot')
        dot.addEventListener('click', () => {
            currentIndex = i
            showSlide(currentIndex)
        })
        dotsContainer.appendChild(dot)
    }
}

function updateDots(index) {
    const dots = document.querySelectorAll('.dot') 
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index) 
    })
}

createDots()
showSlide(currentIndex)
setInterval(nextSlide, 5000) 

/*************************************************************************/

function toggleMenu() {
    const menu = document.querySelector('.menu')
    menu.classList.toggle('active')
}

