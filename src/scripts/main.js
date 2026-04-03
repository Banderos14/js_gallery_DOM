'use strict';

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.tagName !== 'IMG') {
    return;
  }

  const smallImage = e.target;
  const link = smallImage.parentElement;
  const largeImageUrl = link.href;

  mainImage.src = largeImageUrl;
});
