const tabsList = document.querySelectorAll('.hero__tab')
const tabsContentList = document.querySelectorAll('.hero__content')
const currentActiveIndex = () => {
  var activeIndex;
  
  tabsList.forEach((tab, index) => {
    if (tab.classList.contains('active')) activeIndex = index;
  })
  return activeIndex
}

tabsList.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    if (!event.target.classList.contains('active')) {
      
      var currentActiveTabIndex = currentActiveIndex()
      tabsList[currentActiveTabIndex].classList.remove('active')
      childOf(event.target, 'hero__tab').classList.add('active')
      tabsContentList[currentActiveTabIndex].classList.remove('active')

      currentActiveTabIndex = currentActiveIndex()
      tabsContentList[currentActiveTabIndex].classList.add('active')

    }
  })
})