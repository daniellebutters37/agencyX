//variables
var lightbox = document.querySelector('.lightbox'),
	closeLightB = document.querySelector('.closeLightbox'),
	galleryThumb = document.querySelectorAll('.galleryThumb'),
	mainphoto = document.querySelector('#portfolioImage'),
	imageDesc = document.querySelector('#imageDesc'),
	count = 0;

//functions

function openLBox(){
	lightbox.classList.add('show-lightbox');
}

function closeLbox(){
  lightbox.classList.remove('show-lightbox');
}

function showPortfolioImage(){
	mainphoto.src = this.querySelector('img').src.replace('/thumbs','');
	imageDesc.innerHTML = this.querySelector('.projectDesc').innerHTML;
	lightbox.classList.add('show-lightbox');
}

//event listeners

for(var i = 0; i < galleryThumb.length; i++) {
	galleryThumb[i].addEventListener('click', showPortfolioImage, false);
}

closeLightB.addEventListener('click', closeLbox, false);