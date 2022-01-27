const sideMenu = document.querySelector('#menu');
const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')

// show sidebar
menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
})