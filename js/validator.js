// Определяет и устанавилвает значение текста сообщения об ошибке валидации
const errorMessage = (elem, errorMessageContainer) => {
  if (elem.getAttribute('name') === "subject")
    if (!elem.value) {
      errorMessageContainer.innerHTML = "*Выберите тему сообщения." 
      errorMessageContainer.classList.add('invalid')
      return false
    } else {
      errorMessageContainer.innerHTML = "" 
      errorMessageContainer.classList.remove('invalid')
      return true
    }
  
  if (elem.getAttribute('name') === "permission")
    if (!elem.checked) {
      errorMessageContainer.innerHTML = "*Необходимо Ваше согласие."
      errorMessageContainer.classList.add('invalid')
      return false
    } else {
      console.log('errorMessageContainer: ', errorMessageContainer);
      errorMessageContainer.innerHTML = "Благодарим за понимание." 
      errorMessageContainer.classList.remove('invalid')
      return true
    }
  

  if (elem.getAttribute('name') === "message")
    if (!elem.value) {
      errorMessageContainer.innerHTML = "*Введите, пожалуйста сообщение."
      errorMessageContainer.classList.add('invalid')
      return false
    } else {
      if (elem.value.length < 100) {
        errorMessageContainer.innerHTML = "*Длина сообщения 100 символов."
        errorMessageContainer.classList.add('invalid')
        return false
      } else {
        errorMessageContainer.innerHTML = ""
        errorMessageContainer.classList.remove('invalid')
        return true
      } 
    }

  if (elem.getAttribute('name') === "email")
    if (!elem.value) {
      errorMessageContainer.innerHTML = "*Укажите свою почту, пожалуйста..."
      errorMessageContainer.classList.add('invalid')
      return false
    } else {
      if (! /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|ru|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/.test(elem.value)) {
        errorMessageContainer.innerHTML = "*Формат почты name@domen.com."
        errorMessageContainer.classList.add('invalid')
        return false
      } else {
        errorMessageContainer.innerHTML = "" 
        errorMessageContainer.classList.remove('invalid')
        return true
      }
    }

  if (elem.getAttribute('name') === "name")
    if (!elem.value) {
      errorMessageContainer.innerHTML = "*Укажите свое имя, пожалуйста..."
      errorMessageContainer.classList.add('invalid')
      return false
    } else {
      if (elem.value.length < 2) {
        errorMessageContainer.innerHTML = "*Имя не может быть короче двух букв."
        errorMessageContainer.classList.add('invalid')
        return false
      } else {
        if (! /^[A-ZА-ЯЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(elem.value)) {
          errorMessageContainer.innerHTML = "*Вводите только буквы, первая заглавная."
          errorMessageContainer.classList.add('invalid')
          return false
        } else {
          errorMessageContainer.innerHTML = "" 
          errorMessageContainer.classList.remove('invalid')
          return true
        }
      }
    }

  if (elem.getAttribute('name') === "phone")
    if (!elem.value) {
      errorMessageContainer.innerHTML = "Укажите номер телефона."
      errorMessageContainer.classList.add('invalid')
      return false
    } else {
      if (elem.value.length < 18) {
        errorMessageContainer.innerHTML = "Телефон дожен содержать 10 цифр"
        return false
      } else {
        if (! /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(elem.value)) {
          errorMessageContainer.innerHTML = "Формат номера +7 (999) 999-99-99"
          errorMessageContainer.classList.add('invalid')
          return false
        } else {
          errorMessageContainer.innerHTML = "" 
          errorMessageContainer.classList.remove('invalid')
          return true
        }
      }
    } 
}

const inputValidation = (inputElem) => {
  inputElem.addEventListener('input', (event) => {
    if (event.target.parentNode.classList.contains('invalid') && errorMessage(event.target, event.target.nextElementSibling)) {
        event.target.parentNode.classList.remove('invalid')
      }
  })
}

const forms = document.querySelectorAll('.form')

forms.forEach((form) => {
  
  var formBtn = form.querySelector('.button')
  var formInputs = form.querySelectorAll('.input')

  formBtn.addEventListener('click', (event) => {

  var form = childOf(event.target, 'form')
  var formInputs = form.querySelectorAll('.input')

  formInputs.forEach((formInput) => {
      var formInputWrap = formInput.parentNode
      var formErrorLabel = formInputWrap.querySelector('.error')

      if (!errorMessage(formInput, formErrorLabel)) {
        event.preventDefault()
        formInputWrap.classList.add('invalid')
      } else
        formInputWrap.classList.remove('invalid')
    })
  })
  formInputs.forEach(inputValidation)
});