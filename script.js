const mobileMenuDiv = document.querySelector('#mobile-menu');
mobileMenuDiv.className = 'mobile-menu-hidden';
let anchorTag = document.createElement('a');
anchorTag.setAttribute('href', '/');
anchorTag.style.display = 'flex';
anchorTag.style.justifyContent = 'flex-end';
anchorTag.style.marginBottom = '10%';
anchorTag.style.marginRight = '10%';
const closingIcon = document.createElement('IMG');
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
const menuButton = document.querySelector('#menu-button');
function display() {
  const targetedDiv = document.querySelector('.mobile-menu-hidden');
  targetedDiv.classList.add('show');
  menuButton.style.display = 'none';
}

menuButton.addEventListener('click', display);
const closeButton = document.querySelector('#close-button');
function closePop() {
  const targetedDiv2 = document.querySelector('.mobile-menu-hidden');
  targetedDiv2.classList.remove('show');
  menuButton.style.display = 'block';
}

closeButton.addEventListener('click', closePop);
const anchorTagLinks = document.querySelectorAll('.menu-links');
anchorTagLinks.forEach((link) => {
  link.addEventListener('click', closePop);
});


// popup window

const details = [
  {
    name: 'Multi School Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry',
    image: 'img/ten.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    live: 'https://music.youtube.com/watch?v=p45hoiFgge8&list=RDAMVMb9bn-EtmvvY',
    source: 'https://music.youtube.com/watch?v=p45hoiFgge8&list=RDAMVMb9bn-EtmvvY',
  },
  
];

const SeeProjectButton = document.querySelectorAll('.project-button2');

SeeProjectButton.forEach(function (item, i) {
  item.addEventListener('click', function () {
    const windowPop = document.querySelector('#modal');
    windowPop.style.display = 'block';
    const projectDetail = details[i];
    const heading = document.querySelector('.heading h2');
    heading.textContent = projectDetail.name;
    const paragraph = document.querySelector('.img-p-button .description');
    paragraph.textContent = projectDetail.description;
    const picture = document.querySelector('.img-p-button .image');
    picture.src = projectDetail.image;
    const languages = document.querySelectorAll('.languages .bttn');
    languages.forEach(function (li, s) {
      li.textContent = projectDetail.technologies[s];
    })
    const live = windowPop.querySelector('.first-button');
    live.href = projectDetail.live;
    const source = windowPop.querySelector('second-button');
    source.href = projectDetail.source;
  });
})

const closeProjectButton = document.querySelector('.close');

closeProjectButton.addEventListener('click', function(){
  const windowPop = document.querySelector('#modal');
    windowPop.style.display = 'none';
})

