import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');


const createGalleryItem = ({ preview, original, description }) => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = preview;
  galleryImage.alt = description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
};


const renderGallery = (galleryItems) => {
  const galleryElements = galleryItems.map(createGalleryItem);
  gallery.append(...galleryElements);
};

renderGallery(galleryItems);


const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
});

console.log(galleryItems);