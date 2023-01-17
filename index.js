const openMenu = document.querySelector('.ham')
const links = document.querySelector('.hide')
const specialist = document.getElementsByClassName('spe-image')
const transition =document.querySelector('.transition-icons')
openMenu.addEventListener('click', () => {
  openMenu.classList.add('fine')
  openMenu.classList.add('active')
  links.classList.toggle('hide')
})

let slideIndex = 0;

const carousel = () =>{
  let x = document.getElementsByClassName("one");
  Array.from(x).forEach(div => {
    div.style.display = 'none'
  });
  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1 }

  x[slideIndex - 1].style.display = 'block';
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

carousel();

let slideIndex1 = 0

const carousel1 = () =>{
  let x1 = document.getElementsByClassName("kk");
  Array.from(x1).forEach(div => {
    div.style.display = 'none'
  });
  slideIndex1++;
  if (slideIndex1 > x1.length) { slideIndex1 = 1 }

  x1[slideIndex1 - 1].style.display = 'block';
  setTimeout(carousel1, 2000); // Change image every 2 seconds
}
let x = window.matchMedia("(max-width: 700px)")
if (x.matches) { // If media query matches
  carousel1();
}

