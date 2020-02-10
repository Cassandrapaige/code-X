const slides = Array.from(document.getElementsByClassName('description'));
const exit = document.querySelector('.exit');
const process = document.querySelector('.process__list__item__description');
const process_list = document.querySelector('.process__list');
const list = Array.from(document.querySelectorAll('.expand'));
const line = document.querySelector('.scroll__line');
const menu = document.querySelector('.menu-btn');

exit.addEventListener('click', () => {
	process.style.display = 'none';
	process_list.style.opacity = '1';
	line.style.visibility = 'visible';
});

list.forEach((elem) => {
	elem.addEventListener('click', () => {
		slides.forEach((e) => {
		if (elem.dataset.number == e.dataset.number) {
			init();
			process_list.style.opacity = '.4';
			line.style.visibility = 'hidden';
			process.style.display = 'block';
			e.classList.remove('hidden');
		  }
		});
	});
});

let slideIndex = 1;

const showSlides = (num) => {
	if (num > slides.length) {
		slideIndex = 1;
	}
	if (num < 1) {
		slideIndex = slides.length;
	}
	init();
	slides[slideIndex - 1].classList.remove('hidden');
}

const plusSlides = (num) => {
	showSlides((slideIndex += num));
}

const init = () => {
	for (var i = 0; i < slides.length; i++) {
		slides[i].classList.add('hidden');
	}
}

showSlides(slideIndex);

const classToggle = () => {
	const items = document.querySelectorAll('.nav__list__item');
	const btn = document.querySelector('.menu-btn__burger');
	items.forEach((item) => item.classList.toggle('expandNav'));
	btn.classList.toggle('open');
}

menu.addEventListener('click', classToggle);