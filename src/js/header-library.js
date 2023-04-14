import renderMarkur from './render_cards_two';
import Notiflix from 'notiflix';

import localStore from './services/local_storage.js';

export const refs = {
  btnWatched: document.querySelector('#btnWatched'),
  btnQueued: document.querySelector('#btnQueued'),
};

const colectionUl = document.querySelector('.collection');

refs.btnQueued.addEventListener('click', clickOnBtnQueuedHandler);
refs.btnWatched.addEventListener('click', clickOnBtnWatchedHandler);

const queueMovies = localStore.load('queue-movies');
const watchedMovies = localStore.load('watched-films');

renderMarkur(queueMovies);

function clickOnBtnQueuedHandler() {
  refs.btnWatched.classList.remove('active-btn');
  refs.btnQueued.classList.add('active-btn');

  colectionUl.innerHTML = '';

  if (queueMovies.length === 0) {
    Notiflix.Notify.failure('Sorry, there are no films.');
    return;
  }
  Notiflix.Notify.success(`Hooray! There are something interesting for you :)`);

  renderMarkur(queueMovies);
}

function clickOnBtnWatchedHandler() {
  refs.btnQueued.classList.remove('active-btn');
  refs.btnWatched.classList.add('active-btn');

  colectionUl.innerHTML = '';

  if (watchedMovies.length === 0) {
    Notiflix.Notify.failure('Sorry, there are no films.');
    return;
  }

  Notiflix.Notify.success(`You already watched it :)`);

  renderMarkur(watchedMovies);
}
