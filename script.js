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
    name: 'Open-Source Conference Page',
    description: 'A Projest that works on a real live datafrom the SpaceX API. A web application that provides commercial and scientific space travel services.The application allows users to book rockets and join selected space missions.',
    image: 'img/space2.png',
    technologies: ['react', 'css', 'javascript', 'bootsrap'],
    live: 'https://trusting-poitras-39fd6a.netlify.app/',
    source: 'https://github.com/Whoistolu/Space-Traveler-Hub',
  },
  {
    name: 'BUDGET APP',
    description: 'A Ruby on Rails capstone project that is about a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    image: 'img/budget2.png',
    technologies: ['ruby', 'rails', 'css', 'bootsrap'],
    live: 'https://tolu-transaction.herokuapp.com/users/sign_in',
    source: 'https://github.com/Whoistolu/budget-app',
  },
  {
    name: 'Multi School Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry',
    image: 'img/leaderboard2.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    live: 'https://whoistolu.github.io/leaderboard/dist/',
    source: 'https://github.com/Whoistolu/leaderboard',
  },
  {
    name: 'Multi School Stories',
    description: 'To popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia fnfifdfdifhfio fjnkfvkfvfkjfdf jkfndfkdfklgfjkdfnkkjkl jkdfsk',
    image: 'img/a.jpg',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    live: 'https://whoistolu.github.io/personal-portfolio/',
    source: 'https://github.com/Whoistolu/personal-portfolio',
  },
  {
    name: 'Multi School Stories',
    description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a kjbdfkjfvjfvjfvjjo jnffnjvjnvm jgxcgmnklbnfkf ofgngd;fnfkfsip kpgsngfnfjokjf fspkl',
    image: 'img/c.jpg',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    live: 'https://whoistolu.github.io/personal-portfolio/',
    source: 'https://github.com/Whoistolu/personal-portfolio',
  },
  {
    name: 'Multi School Stories',
    description: 'khfjfjfusjfj nvnvsdjdv jdnbvsd jdsjdsklddnd ksvbfkfjf jdnjkfjf kdjdkdfjjk lnbnfklfnffn jbdndbdnkdddjdd dblkjsjksklss dfhfjfhfsfsh jfndfjdnffnnfnfklslsljkfjff jfnfjfjnfnfn fnfjfjfjvmfbvv   v vnnvnnvnvnvnvnv vnvnvjdnknxj jfdp[fpffnfmfkfj nvfjfjffjfjjfjff jgjkgjkgjkgkj',
    image: 'img/f.jpg',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    live: 'https://whoistolu.github.io/personal-portfolio/',
    source: 'https://github.com/Whoistolu/personal-portfolio',
  },
];

const SeeProjectButton = document.querySelectorAll('.project-button2');
SeeProjectButton.forEach((item, i) => {
  item.addEventListener('click', () => {
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
    languages.forEach((li, s) => {
      li.textContent = projectDetail.technologies[s];
    });
    const live = windowPop.querySelectorAll('.first-button')[0];
    live.href = projectDetail.live;
    const source = windowPop.querySelectorAll('.first-button')[1];
    source.href = projectDetail.source;
  });
});
const SeeCardButton = document.querySelectorAll('.click-card');
SeeCardButton.forEach((item, i) => {
  item.addEventListener('click', () => {
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
    languages.forEach((li, s) => {
      li.textContent = projectDetail.technologies[s];
    });
    const live = windowPop.querySelectorAll('.first-button')[0];
    live.href = projectDetail.live;
    const source = windowPop.querySelectorAll('.first-button')[1];
    source.href = projectDetail.source;
  });
});
const closeProjectButton = document.querySelector('.close');
closeProjectButton.addEventListener('click', () => {
  const windowPop = document.querySelector('#modal');
  windowPop.style.display = 'none';
});