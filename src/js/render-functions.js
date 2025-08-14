


import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.box-loader');      // твій лоадер
const loadMoreBtn = document.querySelector('#load-more');  // кнопка Load more

// Один екземпляр лайтбокса
const box = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const imagesList = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy"/>
  </a>

  <ul class="list-description">
    <li class="item-description"><strong>Likes</strong><p>${likes}</p></li>
    <li class="item-description"><strong>Views</strong><p>${views}</p></li>
    <li class="item-description"><strong>Comments</strong><p>${comments}</p></li>
    <li class="item-description"><strong>Downloads</strong><p>${downloads}</p></li>
  </ul>
</li>`
    )
    .join('');

  // додаємо однією операцією
  galleryContainer.insertAdjacentHTML('beforeend', imagesList);
  box.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

// Лоадер
export function showLoader() {
  loader?.classList.remove('is-hidden');
}
export function hideLoader() {
  loader?.classList.add('is-hidden');
}

// Кнопка Load more
export function showLoadMoreButton() {
  loadMoreBtn?.classList.remove('is-hidden');
}
export function hideLoadMoreButton() {
  loadMoreBtn?.classList.add('is-hidden');
}

// Висота першої картки для плавного скролу
export function getFirstCardHeight() {
  const first = galleryContainer.firstElementChild;
  return first ? first.getBoundingClientRect().height : 0;
}