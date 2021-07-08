const bookmarksList = document.querySelectorAll('.bookmark')

bookmarksList.forEach((bookmark) => {
  bookmark.addEventListener('click', (event) => {
    event.preventDefault()
    childOf(event.target, 'bookmark').classList.toggle('checked')
  })
})