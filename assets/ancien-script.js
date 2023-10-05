const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const dotsContainer = document.querySelector('.dots');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
let currentSlide = slides[0];
let indexOfCurrentSlide = slides.indexOf(currentSlide);
const bannerImage = document.querySelector('#banner img.banner-img');
const bannerText = document.querySelector('#banner img.banner-img + p');  // sélectionne le paragraphe qui est immédiatement après l'image.
const sliderImagesPath = './assets/images/slideshow/';

function addBulletPointToSlider() {
	if(slides.length) {
		slides.forEach((value) => {
			const newDot = document.createElement('div');
			newDot.className = 'dot';
			dotsContainer.appendChild(newDot);
		});
	}
}

function highlightCurrentDot() {
	const dots = document.querySelectorAll('.dot');
	dots.forEach((element, index) => {
		if(indexOfCurrentSlide === index) {
			element.classList.add('dot_selected');
		} else {
			element.classList.remove('dot_selected');
		}
	})
}

function changeSlideOnClick(direction) {

	if(direction === 'right' && indexOfCurrentSlide < (slides.length - 1) ) {
		indexOfCurrentSlide += 1;
	}

	if(direction === 'right' && indexOfCurrentSlide === (slides.length - 1)) {
		indexOfCurrentSlide = 0;
	}

	if(direction === 'left' && indexOfCurrentSlide > 0 ) {
		indexOfCurrentSlide -= 1;
	}

	if(direction === 'left' && indexOfCurrentSlide === 0) {
		indexOfCurrentSlide = (slides.length - 1);
	}

	currentSlide = slides[indexOfCurrentSlide];
	highlightCurrentDot();
	bannerImage.src = sliderImagesPath + currentSlide.image;
	bannerText.innerHTML = currentSlide.tagLine;
}

arrowLeft.addEventListener('click', (e) => {
    changeSlideOnClick('left');
});

arrowRight.addEventListener('click', (e) => {
    changeSlideOnClick('right');
});




