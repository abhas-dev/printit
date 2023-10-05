const dotsContainer = document.querySelector('.dots');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImage = document.querySelector('#banner img.banner-img');
const bannerText = document.querySelector('#banner img.banner-img + p');  // sélectionne le paragraphe qui est immédiatement après l'image.


const slider = {
	slides: [
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
	],
	currentIndex: 0,
	imagePath: './assets/images/slideshow/',

	changeIndexOnClick: function (direction) {
		if (direction === 'right') {
			this.currentIndex = (this.currentIndex + 1) % this.slides.length;
		} else if (direction === 'left') {
			this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
		}

		return this.currentIndex
	},

	getCurrentSlide: function () {
		return this.slides[this.currentIndex];
	},

	setCurrentSlide: function () {
		this.highlightCurrentDot();
		bannerImage.src = this.imagePath + this.getCurrentSlide().image;
		bannerText.innerHTML = this.getCurrentSlide().tagLine;
	},

	addBulletPoint: function () {
		if (this.slides.length) {
			this.slides.forEach(() => {
				const newDot = document.createElement('div');
				newDot.className = 'dot';
				dotsContainer.appendChild(newDot);
			});
		}
	},

	highlightCurrentDot: function () {
		if(dots) {
			dots.forEach((element, index) => {
				if (this.currentIndex === index) {
					element.classList.add('dot_selected');
				} else {
					element.classList.remove('dot_selected');
				}
			});
		}
	}
}


slider.addBulletPoint();
const dots = document.querySelectorAll('.dot');
dots[0].classList.add('dot_selected');
slider.highlightCurrentDot();

slider.setCurrentSlide();

arrowLeft.addEventListener('click', (e) => {
	slider.changeIndexOnClick('left');
	slider.setCurrentSlide();
});

arrowRight.addEventListener('click', (e) => {
	slider.changeIndexOnClick('right');
	slider.setCurrentSlide();
});




