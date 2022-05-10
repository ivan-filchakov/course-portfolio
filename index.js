
// Вызов меню в мобильной версии:
const navbar = document.querySelector('#nav');
const navControls = document.querySelector('#navControls');

function toggleNavbar() {
  const toggle = (height) => navbar.style.height = height;
  navbar.style.height === 'auto' ? toggle('60px') : toggle('auto')
}
navControls.addEventListener('click', toggleNavbar);


// Вызов меню под стрелочкой возле аватарки
const userDropButton = document.querySelector('#userDropButton');
const userDropList = document.querySelector('#userDropList');

function toggleDropList() {
  let scale;
  userDropList.hasAttribute('hidden') ? scale = -1 : scale = 1;
  userDropButton.style.transform = `scaleY(${scale})`;
  userDropList.hidden = !userDropList.hidden
}
userDropButton.addEventListener('click', toggleDropList)


// быстрая "авторизация"
const cart = document.querySelector('#cart');
const signIn = document.querySelector('#signIn');
const signUp = document.querySelector('#signUp');
const userPic = document.querySelector("#userPic");
const signOut = document.querySelector("#signOut");

function authorize(user) {
  cart.hidden = !cart.hidden;
  signIn.hidden = !signIn.hidden;
  signUp.hidden = !signUp.hidden;
  userPic.src = user;
  userDropButton.hidden = !userDropButton.hidden;
  if (!userDropList.hidden) {  toggleDropList()  }
}
signIn.addEventListener('click', () => {
  authorize('img/userpic-login.png')
});
signOut.addEventListener('click', () => {
  authorize('img/userpic-default.svg')
});


// Slider
function highlightDot(slider, i) {
  const dots = slider.querySelector('.slider__controls').childNodes;
  dots.forEach(element => element.className = 'sliderDot');
  dots[i].className = 'sliderDot sliderDot--active'
}
function showSlide(allSlides, i) {
  allSlides.forEach(element => element.style.display = 'none')
  allSlides[i].style.display = 'flex';
}

function initSlider(slider) {
  const allSlides = slider.querySelectorAll('.slide');
  const sliderControls = slider.querySelector('.slider__controls');

  for (let i = 0; i < allSlides.length; i++) {
    const newDot = document.createElement('div');
    newDot.className = 'sliderDot';
    newDot.addEventListener('click', () => {
      showSlide(allSlides, i);
      highlightDot(slider, i);
    })
    sliderControls.append(newDot)
  }

  showSlide(allSlides, 0)
  sliderControls.firstChild.className = 'sliderDot sliderDot--active';
}

const allSliders = document.querySelectorAll(`.slider`);
allSliders.forEach(element => initSlider(element))
