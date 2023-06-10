
import { galleryItems } from './gallery-items.js';

// Change code below this line
document.addEventListener('DOMContentLoaded', () => {
  const galleryList = document.querySelector('.gallery');

  const createGalleryItem = ({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>
  `;

  const galleryMarkup = galleryItems.map(createGalleryItem).join('');
  galleryList.innerHTML = galleryMarkup;

  const lightbox = basicLightbox.create(`
    <img class="gallery__image" src="" alt="" />
  `);

  galleryList.addEventListener('click', event => {
    event.preventDefault();
    const targetImage = event.target.closest('.gallery__image');
    if (targetImage) {
      const { source, alt } = targetImage.dataset;
      const image = lightbox.element().querySelector('.gallery__image');
      image.src = source;
      image.alt = alt;
      lightbox.show();
    }
  });
});
