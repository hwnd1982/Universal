// Получаем кнопки
const btnHotelPrev = document.querySelector('.hotel-button-prev');
const btnHotelNext = document.querySelector('.hotel-button-next');

// Получаем кнопки
const btnReviewPrev = document.querySelector('.review-button-prev');
const btnReviewNext = document.querySelector('.review-button-next');

var activeSlideIndex = {
  current: {
    prev: hotelSlidesList.length-1,
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

btnHotelPrev.addEventListener('click', () => {
  scrollLeft(activeHotelSlideIndex, hotelSlidesList); 
});
btnHotelNext.addEventListener('click', () => {
  scrollRight(activeHotelSlideIndex, hotelSlidesList);
});


btnReviewPrev.addEventListener('click', () => {
  scrollLeft(activeReviewSlideIndex, reviewSlidesList); 
});
btnReviewNext.addEventListener('click', () => {
  scrollRight(activeReviewSlideIndex, reviewSlidesList);
});


document.addEventListener('keydown', (event) => {
  if ((event.code == 'ArrowRight') || (event.code == 'ArrowLeft')) {
    const hotelSliderPosition = document.querySelector('.hotel-slider').getBoundingClientRect();

    const hotelSliderTop = hotelSliderPosition.top;
    const hotelSliderHeight = hotelSliderPosition.height;
  
    
    if ((hotelSliderTop >= 0) && (window.innerHeight-hotelSliderTop >= hotelSliderHeight)) {
      if (event.code == 'ArrowRight') {
        scrollRight(activeHotelSlideIndex, hotelSlidesList);
      }
      if (event.code == 'ArrowLeft') {
        scrollLeft(activeHotelSlideIndex, hotelSlidesList);
      }
    }

    const reviewSliderPosition = document.querySelector('.review-slider').getBoundingClientRect();

    const reviewSliderTop = reviewSliderPosition.top;
    const reviewSliderHeight = reviewSliderPosition.height;

    if ((reviewSliderTop >= 0) && (window.innerHeight-reviewSliderTop >= reviewSliderHeight)) {
      if (event.code == 'ArrowRight') {
        scrollRight(activeReviewSlideIndex, reviewSlidesList);
      }
      if (event.code == 'ArrowLeft') {
        scrollLeft(activeReviewSlideIndex, reviewSlidesList);
      }
    }
  }
});


var startPoint={};
var nowPoint;
var ldelay;

document.addEventListener('touchstart', function(event) {
  event.preventDefault();
  event.stopPropagation();
  startPoint.x=event.changedTouches[0].pageX;
  startPoint.y=event.changedTouches[0].pageY;
  ldelay=new Date();
}, false);

/*Ловим движение пальцем*/
document.addEventListener('touchmove', function(event) {
  event.preventDefault();
  event.stopPropagation();
  var otk={};
  nowPoint=event.changedTouches[0];
  otk.x=nowPoint.pageX-startPoint.x;

  /*Обработайте данные*/
  /*Для примера*/
  if(Math.abs(otk.x)>200){
    if(otk.x<0){/*СВАЙП ВЛЕВО(ПРЕД.СТРАНИЦА)*/}
    if(otk.x>0){/*СВАЙП ВПРАВО(СЛЕД.СТРАНИЦА)*/}
  startPoint={x:nowPoint.pageX,y:nowPoint.pageY};
  }
}, false);

/*Ловим отпускание пальца*/
document.addEventListener('touchend', function(event) {
  var pdelay=new Date();
  nowPoint=event.changedTouches[0];
  var xAbs = Math.abs(startPoint.x - nowPoint.pageX);
  var yAbs = Math.abs(startPoint.y - nowPoint.pageY);
  if ((xAbs > 20 || yAbs > 20) && (pdelay.getTime()-ldelay.getTime())<200) {
    if (xAbs > yAbs) {
      if (nowPoint.pageX < startPoint.x){
        /*СВАЙП ВЛЕВО*/
        if (childOf(event.target, 'hotel-slider'))
          scrollRight(activeHotelSlideIndex, hotelSlidesList);
        if (childOf(event.target, 'review-slider'))
          scrollLeft(activeReviewSlideIndex, reviewSlidesList);
      }
      else{/*СВАЙП ВПРАВО*/
        if (childOf(event.target, 'hotel-slider'))
          scrollLeft(activeHotelSlideIndex, hotelSlidesList);
        if (childOf(event.target, 'review-slider'))
          scrollRight(activeReviewSlideIndex, reviewSlidesList);
      }
    }
    else {
      if (nowPoint.pageY < startPoint.y){/*СВАЙП ВВЕРХ*/}
      else{/*СВАЙП ВНИЗ*/}
    }
  }
}, false);