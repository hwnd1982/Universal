const sliderButtonsBlock = document.querySelector('.slider__pagination')
const sliderButtonsList = sliderButtonsBlock.querySelectorAll('.slider__button')

const slidesList = document.querySelectorAll('.slide');

var activeSlideIndex = {
  current: {
    prev:  slidesList.length-1,
    displayed: 0,
    next: 1
  },
  new: {
    prev: 0,
    displayed: 0,
    next: 0
  }
};


activeSlideIndex.current.displayed = Number(sliderButtonsBlock.querySelector('.active').getAttribute('id'))

if (activeSlideIndex.current.displayed == slidesList.length - 1) {
  activeSlideIndex.current.next = 0
  activeSlideIndex.current.prev = activeSlideIndex.current.displayed--
} else 
  if (activeSlideIndex.current.displayed == 0) {
    activeSlideIndex.current.prev = slidesList.length - 1
    activeSlideIndex.current.next = activeSlideIndex.current.displayed + 1
  } else {
    activeSlideIndex.current.prev = activeSlideIndex.current.displayed - 1
    activeSlideIndex.current.next = activeSlideIndex.current.displayed + 1
  }

initializeScroll(activeSlideIndex, slidesList);
  
sliderButtonsList.forEach((sliderButton) => {
  sliderButton.addEventListener('click', (event) =>{

    var currentPositionIndex = sliderButtonsBlock.querySelector('.active').getAttribute('id')
    var nextPositionIndex = event.target.getAttribute('id')

    if (nextPositionIndex != currentPositionIndex) {
      var timeCounter = 0
      if (currentPositionIndex > nextPositionIndex) {
        for (var i = currentPositionIndex; i > nextPositionIndex; i--) {
          setTimeout(scrollLeft, 600*timeCounter, activeSlideIndex, slidesList)
          timeCounter ++
        }
      } else {
        for (var i = currentPositionIndex; i < nextPositionIndex; i++) {
            setTimeout(scrollRight, 600*timeCounter, activeSlideIndex, slidesList)
            timeCounter ++
        }
      }
      sliderButtonsList[nextPositionIndex].classList.add('active')
      sliderButtonsList[currentPositionIndex].classList.remove('active')
      
      clearInterval(intervalID)
      intervalID = setTimeout(setInterval, 5000, autoPlay, 5000)
    }
  })
});

const autoPlay = () => {
  var currentPositionIndex = sliderButtonsBlock.querySelector('.active').getAttribute('id')

  scrollRight(activeSlideIndex, slidesList)
  sliderButtonsList[currentPositionIndex].classList.remove('active')
  if (currentPositionIndex == slidesList.length - 1) sliderButtonsList[0].classList.add('active')
  else { 
    currentPositionIndex++
    sliderButtonsList[currentPositionIndex].classList.add('active')
  } 
  
}
var intervalID = setInterval(autoPlay, 5000)
