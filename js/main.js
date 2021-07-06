// Определяет является ли заланый класс предком элемента
const childOf = (childElem, className) => {
  if (childElem === document.documentElement || childElem === document.body) return false
  while(!childElem.classList.contains(className)) {
    childElem = childElem.parentNode 
    if (childElem === document.body) return false
  }
  return childElem; 
}