// Получаем кнопки
const btnPrev = document.querySelector('.buttons_prev');
const btnNext = document.querySelector('.buttons_next');
const slidesList = document.querySelectorAll('.slide');

var activeSlideIndex = {
  current: {
    prev: slidesList.length-1,
    displayed: 0,
    next: 1
  },
  new: {
    prev: 0,
    displayed: 0,
    next: 0
  }
};


initializeScroll(activeSlideIndex, slidesList);

btnPrev.addEventListener('click', () => {
  scrollLeft(activeSlideIndex, slidesList); 
});
btnNext.addEventListener('click', () => {
  scrollRight(activeSlideIndex, slidesList);
});

document.addEventListener('keydown', (event) => {
  if ((event.code == 'ArrowRight') || (event.code == 'ArrowLeft')) {
    const sliderPosition = document.querySelector('.slider').getBoundingClientRect();
    
    const sliderTop = sliderPosition.top;
    console.log('sliderTop: ', sliderTop);
    const sliderHeight = sliderPosition.height;
    console.log('sliderHeight: ', sliderHeight);
    console.log('window.innerHeight-sliderTop: ', window.innerHeight-sliderTop);
    
    
    if ((sliderTop >= -sliderHeight) && (window.innerHeight-sliderTop >= 0)) {
      if (event.code == 'ArrowRight') {
        scrollRight(activeSlideIndex, slidesList);
      }
      if (event.code == 'ArrowLeft') {
        scrollLeft(activeSlideIndex, slidesList);
      }
    }
  }
});