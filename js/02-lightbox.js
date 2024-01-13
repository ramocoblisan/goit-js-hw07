import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
const gallery = document.querySelector("ul.gallery");
const fragment = new DocumentFragment();
const liTemplate = document.createElement("template");

liTemplate.innerHTML = `<li class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>
</li>`;


function appendGalleryItemToFragment(item) {
    const clone = liTemplate.content.cloneNode(true);
    const imgClone = clone.querySelector("img");
    const aClone = clone.querySelector("a");

    imgClone.src = item.preview;
    imgClone.dataset.source = item.original;
    imgClone.alt = item.description;
    aClone.href = item.original;
    fragment.appendChild(clone);
}

galleryItems.forEach(appendGalleryItemToFragment);
gallery.appendChild(fragment);

new SimpleLightbox('ul.gallery a', { captionsData: "alt", captionDelay: 250 });
