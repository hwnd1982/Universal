const btnAddReply = document.querySelector('.comments__button-add-comment')

btnAddReply.addEventListener('click', (event) => {
  document.querySelector('.comments__form-input').focus()
})

const btnLoadComments = document.querySelector('.comments__loading')

btnLoadComments.addEventListener('click', (event) => {
  var hiddenCommentElems = document.querySelector('.comments__items').querySelectorAll('.hidden')

  let nextFiveComments = hiddenCommentElems.length;
  if (nextFiveComments > 3) {
      nextFiveComments = 3;
    } else {
      event.target.classList.add('hidden')
    }
   let i = 0; 
   while (i < nextFiveComments) {   
     hiddenCommentElems[i].classList.remove('hidden');
     i++;
   }
    hiddenCommentElems[0].scrollIntoView({ behavior: 'smooth' }); 
})
