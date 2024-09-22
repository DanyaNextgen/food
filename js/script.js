let slides = document.querySelectorAll('.offer__slide')
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let tabs = document.querySelectorAll('.tabcontent')
let tabButtons = document.querySelectorAll('.tabheader__item')
let current_view = document.querySelector('#current')
let modal = document.querySelector('.modal')
let open_modal = document.querySelectorAll('[data-open]')
let close_modal = document.querySelector('[data-close]')
let slideIndex = 0

showSlide()

function showSlide(n) {
    if(n < 0) {
        slideIndex = slides.length - 1
    }
    
    if(n > slides.length - 1) {
        slideIndex = 0
    }

	current_view.innerHTML = `0${slideIndex + 1}`
    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')
}

next.onclick = () => {
    slideIndex++
    showSlide(slideIndex)
}
prev.onclick = () => {
    slideIndex--
    showSlide(slideIndex)
}

showTabs(0)

function showTabs(n) {
	tabs.forEach(tab => tab.classList.add('hide', 'fade'))
	tabs[n].classList.remove('hide')
}

tabButtons.forEach((btn, idx) => {
	btn.onclick = () => {
		document.querySelector('.tabheader__item_active').classList.remove('tabheader__item_active')
		btn.classList.add('tabheader__item_active')
		showTabs(idx)
	}
})

open_modal.forEach(open => {
	open.onclick = () => {
		modal.classList.add('show')
	}
})

close_modal.onclick = () => {
	modal.classList.remove('show')
}

let links = document.querySelectorAll('.header__link')

let firstLink = links[0]
let secondLink = links[1]

links[0].onclick = function(e) {
    e.preventDefault()
    window.scroll({
        top: document.body.scrollHeight, 
        left: 0,
        behavior: 'smooth'
    });
};

links[1].onclick = function(e) {
    e.preventDefault()
    let secondPoint = document.querySelector('.second-point')
    window.scroll({
        top: secondPoint.offsetTop, 
        left: 0,
        behavior: 'smooth'
    });
};

