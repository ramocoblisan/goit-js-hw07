import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

import basiclightbox from "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/+esm";

const modal = basiclightbox.create(`<img>`);
const modalImg = modal.element().querySelector(`img`);

const gallery = document.querySelector("ul.gallery");
const fragment = new DocumentFragment();
const liTemplate = document.createElement("template");

liTemplate.innerHTML = `<li class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src="small-image.jpg"
    data-source="large-image.jpg"
    alt="Image description"
  />
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

gallery.addEventListener("click", (event) => {
    event.preventDefault();
    modalImg.src = event.target.dataset.source;
    modal.show();
}, true);

document.addEventListener("keydown", event => {
    if ( event.code === "Escape" && modal.visible()) {
        event.preventDefault();
        modal.close();
    }
});
