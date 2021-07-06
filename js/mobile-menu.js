const mobileMenuButton = document.querySelector('.mobile-menu')

mobileMenuButton.addEventListener("click", (event) => { 
  // const mobileMenuNavbarMenu = 
  document.querySelector('.nav-menu').classList.toggle('active')
  mobileMenuButton.classList.toggle('active')
  // mobileMenuNavbarMenu.classList.toggle('active')
  // mobileMenuButton.classList.toggle('active')
});

document.addEventListener("click", (event)  => { 
  if (!event.target.classList.contains('nav-menu') && !event.target.classList.contains('mobile-menu')) {
    if (mobileMenuButton.classList.contains('active')) {
      mobileMenuButton.classList.remove('active')
      document.querySelector('.nav-menu').classList.remove('active')
    }
  }
});