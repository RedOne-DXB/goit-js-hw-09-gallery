const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const refs = {
imgList: document.querySelector('.js-gallery'),
openModal: document.querySelector('.js-lightbox'),
backdrop: document.querySelector('.lightbox__overlay'),
modalImg: document.querySelector(".lightbox__image"),
closeBtn: document.querySelector('[data-action="close-lightbox"]'),
}

const addItems = galleryItems => {
    return `<li class='gallery__item'><a href='#' class='gallery__link'><img src='${galleryItems.preview}' data-source='${galleryItems.original}' alt='${galleryItems.description}' class='gallery__image'/></a></li>`
}

const itemsCompilation = galleryItems.map(addItems).join('');

refs.imgList.insertAdjacentHTML('afterbegin', itemsCompilation);

refs.imgList.addEventListener('click', onOpenModal)
refs.closeBtn.addEventListener('click', onCloseModal)
refs.backdrop.addEventListener('click', onCloseModal)

function onOpenModal(event) {
  if (event.target === refs.imgList) {
    return undefined;
  }
  refs.openModal.classList.add('is-open');
  refs.modalImg.src = event.target.dataset.source
  refs.modalImg.alt = event.target.alt
  console.log(event.target);
  // console.log(refs.modalImg) 
  // console.log(refs.openModal)
  window.addEventListener('keydown', onEscKeyPress);
}

function onCloseModal(event) {
  refs.openModal.classList.remove('is-open');
   window.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
    // console.log(event.code);
  }
}

