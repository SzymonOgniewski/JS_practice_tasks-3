import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(simpleLightbox);
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

galleryItems.forEach(element => {
  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = element.original;
  gallery.append(link);
  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = element.preview;
  image.alt = element.description;
  link.append(image);
});
let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
