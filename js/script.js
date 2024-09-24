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
let genderBtn = document.querySelectorAll('#gender .calculating__choose-item')
let ratioInputs = document.querySelectorAll('.calculating__choose_medium input')
let activeBtns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
let result_view = document.querySelector('.calculating__result span')
let user = {
    gender: 'woman',
    act: 'small',
}


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

genderBtn.forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.calculating__choose-item_active').classList.remove('calculating__choose-item_active')
        btn.classList.add('calculating__choose-item_active')
        user.gender = btn.getAttribute('data-gender')
    }
})

ratioInputs.forEach(inp => {
    inp.onkeyup = () => {
        user[inp.id] = inp.value
    }
})

activeBtns.forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.calculating__choose_big .calculating__choose-item_active').classList.remove('calculating__choose-item_active')
        btn.classList.add('calculating__choose-item_active')
        user.act = btn.getAttribute('data-act')   
        let result = 0

        if(user.gender === 'woman') {
            result = 655.1 + (9.563 * user.weight) + (1.85 * user.height) - (4.676 * user.age)
        }
        else {
            result = 66.5 + (13.75 * user.weight) + (5.003 * user.height) - (6.775 * user.age)
        }
        result_view.innerHTML = Math.round(result)
    }
})

let endDate = new Date(Date.now() + 12 * 24 * 60 * 60 * 1000 + 20 * 60 * 60 * 1000 + 56 * 60 * 1000 + 20 * 1000);

function updateCountdown() {
    let timeRemaining = endDate - Date.now();

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.querySelector('#days').textContent = days;
    document.querySelector('#hours').textContent = hours;
    document.querySelector('#minutes').textContent = minutes;
    document.querySelector('#seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();


