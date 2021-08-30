const mobileMenuDiv = document.querySelector('#mobile-menu');
mobileMenuDiv.className = 'popup';
let anchorTag = document.createElement('a');
anchorTag.setAttribute('href', '/');
let closingIcon = document.createElement('IMG');
closingIcon.setAttribute('src', 'img/Icon.png');
closingIcon.setAttribute('alt', 'icon image');
anchorTag.appendChild(closingIcon);
mobileMenuDiv.appendChild(anchorTag);
anchorTag = document.createElement('a');
anchorTag.textContent = 'Portfolio';
mobileMenuDiv.appendChild(anchorTag);
anchorTag = document.createElement('a');
anchorTag.textContent = 'About';
mobileMenuDiv.appendChild(anchorTag);
anchorTag = document.createElement('a');
anchorTag.textContent = 'Contact';
mobileMenuDiv.appendChild(anchorTag);
let menuButton = document.querySelector('#menu-button');


// function myFunction() { var x = document.getElementById("mobile-menu");
// if (x.style.display === "block") { x.style.display = "none";
//  } else { 
//      x.style.display = "block"; } } ;
// menuButton.addEventListener('click',myFunction);