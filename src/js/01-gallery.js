// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryUl = document.querySelector('.gallery');

let markup = '';
for (let i = 0; i < galleryItems.length; i += 1) {
  markup += `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItems[i].original}" target="_blank" rel="noreferrer noopener">
    <img
      class="gallery__image"
      src="${galleryItems[i].preview}"
      data-source="${galleryItems[i].original}"
      alt="${galleryItems[i].description}"
    />
  </a>
</li>`;
}
galleryUl.insertAdjacentHTML('afterbegin', markup);

let dynamicGallery = new SimpleLightbox('.gallery a', {
  caption: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
dynamicGallery.on('show.simplelightbox', function () {});
