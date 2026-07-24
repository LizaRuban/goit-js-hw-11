import fetchData from '/js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from '/js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      message: 'Please enter a search query!',
    });

    event.currentTarget.reset();
    return;
  }

  clearGallery();
  showLoader();

  fetchData(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      console.log(error);

      iziToast.error({
        message: 'Something went wrong!',
      });
    })
    .finally(() => {
      hideLoader();
      event.currentTarget.reset();
    });
}
