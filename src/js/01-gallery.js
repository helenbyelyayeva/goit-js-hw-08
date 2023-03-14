// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


const galleryListIt = document.querySelector(".gallery");
galleryListIt.setAttribute('uk-lightbox', 'caption-position:bottom');


galleryListIt.addEventListener('click', ongalleryListItClick);


function createGalleryItem(array) {


   return array.map(({ preview, original, description }) => {
       const item = document.createElement('a');


       item.href = original;
       item.classList.add('gallery__item');
       item.dataset.caption = description;
       const image = document.createElement("img");
       image.src = preview;
       image.classList.add('gallery__image');
       image.alt = description;
       image.title = description;
       item.append(image);


       return item;
   })


}




const galleryElements = createGalleryItem(galleryItems);
galleryListIt.append(...galleryElements);








function ongalleryListItClick(event) {
   event.preventDefault();


   if (event.target.nodeName !== "IMG") {
       return
   };






   let href = (event.target.closest('a').getAttribute('href'));
   return href;
}
let gallery = new SimpleLightbox('.gallery a', { caption: true, captionPosition: 'bottom', captionDelay: 250 });




gallery.on('show.simplelightbox', function () {
});




console.log(galleryItems);


