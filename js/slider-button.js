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

console.log('activeSlideIndex: ', activeSlideIndex);

initializeScroll(activeSlideIndex, slidesList);

btnPrev.addEventListener('click', () => {
  scrollLeft(activeSlideIndex, slidesList); 
});
btnNext.addEventListener('click', () => {
  scrollRight(activeSlideIndex, slidesList);
});


// document.addEventListener('keydown', (event) => {
//   if ((event.code == 'ArrowRight') || (event.code == 'ArrowLeft')) {
//     const hotelSliderPosition = document.querySelector('.hotel-slider').getBoundingClientRect();

//     const hotelSliderTop = hotelSliderPosition.top;
//     const hotelSliderHeight = hotelSliderPosition.height;
  
    
//     if ((hotelSliderTop >= 0) && (window.innerHeight-hotelSliderTop >= hotelSliderHeight)) {
//       if (event.code == 'ArrowRight') {
//         scrollRight(activeHotelSlideIndex, hotelSlidesList);
//       }
//       if (event.code == 'ArrowLeft') {
//         scrollLeft(activeHotelSlideIndex, hotelSlidesList);
//       }
//     }

//     const reviewSliderPosition = document.querySelector('.review-slider').getBoundingClientRect();

//     const reviewSliderTop = reviewSliderPosition.top;
//     const reviewSliderHeight = reviewSliderPosition.height;

//     if ((reviewSliderTop >= 0) && (window.innerHeight-reviewSliderTop >= reviewSliderHeight)) {
//       if (event.code == 'ArrowRight') {
//         scrollRight(activeReviewSlideIndex, reviewSlidesList);
//       }
//       if (event.code == 'ArrowLeft') {
//         scrollLeft(activeReviewSlideIndex, reviewSlidesList);
//       }
//     }
//   }
// });