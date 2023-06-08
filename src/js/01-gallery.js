// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryConteiner = document.querySelector(`.gallery`);
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryConteiner.insertAdjacentHTML(`beforeend`, cardsMarkup);

galleryConteiner.addEventListener('click', onGalleryConteinerClick);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description } = {}) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
   </a>
</li>
    `;
    })
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function onGalleryConteinerClick(evt) {
  evt.preventDefault();
}

const styleLi = document.querySelector('ul');
styleLi.style.listStyleType = 'none';
