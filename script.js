const mobileMenuDiv = document.querySelector('#mobile-menu');
mobileMenuDiv.className = 'mobile-menu-hidden';
let anchorTag = document.createElement('a');
anchorTag.setAttribute('href', '/');
anchorTag.style.display = 'flex';
anchorTag.style.justifyContent = 'flex-end';
anchorTag.style.marginBottom = '10%';
anchorTag.style.marginRight = '10%'
let closingIcon = document.createElement('IMG');
closingIcon.setAttribute('src', 'img/Icon.png');
closingIcon.setAttribute('alt', 'icon image');
closingIcon.id = 'close-button';
anchorTag.appendChild(closingIcon);
mobileMenuDiv.appendChild(anchorTag);
anchorTag = document.createElement('a');
anchorTag.textContent = 'Portfolio';
anchorTag.setAttribute('href', '#actual-work-section');
anchorTag.className = 'menu-links';
mobileMenuDiv.appendChild(anchorTag);
anchorTag = document.createElement('a');
anchorTag.textContent = 'About';
anchorTag.setAttribute('href', '#menu-about');
anchorTag.className = 'menu-links';
mobileMenuDiv.appendChild(anchorTag);
anchorTag = document.createElement('a');
anchorTag.textContent = 'Contact';
anchorTag.setAttribute('href', '#menu-contact');
anchorTag.className = 'menu-links';
mobileMenuDiv.appendChild(anchorTag);
let menuButton = document.querySelector('#menu-button');

function display () {
  const targetedDiv = document.querySelector('.mobile-menu-hidden');
  targetedDiv.classList.add('show');
  menuButton.style.display = 'none';
}

menuButton.addEventListener('click',display);
const closeButton = document.querySelector('#close-button');
function closePop () {
  const targetedDiv2 = document.querySelector('.mobile-menu-hidden');
  targetedDiv2.classList.remove('show');
  menuButton.style.display = 'block';
}

closeButton.addEventListener('click',closePop);
const anchorTagLinks = document.querySelectorAll('.menu-links');
anchorTagLinks.forEach((link) => {
  link.addEventListener('click', closePop);
})