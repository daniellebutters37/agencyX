//variables
var lightbox = document.querySelector('.lightbox'),
	closeLightB = document.querySelector('.closeLightbox'),
	galleryThumb = document.querySelectorAll('.galleryThumb'),
	mainphoto = document.querySelector('#portfolioImage'),
	imageDesc = document.querySelector('#imageDesc'),
	count = 0;
	folder = 'images/'
	// portfolioImage = ['project1.jpg', 'project2.jpg', 'project3.jpg', 'project4.jpg', 'project5.jpg', 'project6.jpg', 'project7.jpg', 'project8.jpg',];
	portfolioImage = ['lightbox.jpg', 'lightbox.jpg', 'lightbox.jpg', 'lightbox.jpg', 'lightbox.jpg', 'lightbox.jpg', 'lightbox.jpg', 'lightbox.jpg',];
	captions = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6', 'Project 7', 'Project 8',];

//functions

function openLBox(){
	lightbox.classList.add('show-lightbox');
}

function closeLbox(){
  lightbox.classList.remove('show-lightbox');
}

function showPortfolioImage(){
	var pick = this.dataset.pick;
	count = pick;
	mainphoto.src = folder + portfolioImage[count];
	imageDesc.innerHTML = captions[count];
	count = pick;
	lightbox.classList.add('show-lightbox');
}

//event listeners

for(var i = 0; i < galleryThumb.length; i++) {
	galleryThumb[i].addEventListener('click', openLBox, false);
}

closeLightB.addEventListener('click', closeLbox, false);

galleryThumb.addEventListener('click', showPortfolioImage, false);