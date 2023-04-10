// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const galleryUl = document.querySelector('.gallery');

// galleryUl.addEventListener('click', onClick);

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

// function onClick(event) {
//   event.preventDefault();

//   if (!event.target.classList.contains('gallery__image')) {
//     return;
//   }

//   const instance = basicLightbox.create(`
// 	<img
//       class="gallery__image"
//       src="${event.target.dataset.source}"
//       data-source="${event.target.dataset.source}"
//     />
// `);
//   instance.show();

//   window.addEventListener('keyup', onKetUp);

//   function onKetUp(event) {
//     if (event.code === 'Escape') {
//       instance.close();
//       window.removeEventListener('keyup', onKetUp);
//       return;
//     }
//   }
// }
