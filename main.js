'use strict';

const buttons = document.querySelectorAll('.btn');
const resultsBox = document.querySelector('.results');
const urlKitty = 'https://api.thecatapi.com/v1/images/search';
const urlDog = 'https://dog.ceo/api/breeds/image/random';

const printPic = url => {
  resultsBox.innerHTML = '';
  const pic = document.createElement('img');

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const src = data[0].url;
      pic.classList.add('image');
      pic.setAttribute('src', src);
      pic.setAttribute('height', '400px');
    })
  
  resultsBox.appendChild(pic);
}

const printAltPic = url => {
  resultsBox.innerHTML = '';
  const pic = document.createElement('img');
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const src = data.message;
      pic.classList.add('image');
      pic.setAttribute('src', src);
      pic.setAttribute('height', '400px');
    })

  resultsBox.appendChild(pic);
}

const getSomething = event => {
  const targetId = parseInt(event.currentTarget.id); 
  if (targetId === 1) {
    printPic(urlKitty);
  } else if (targetId === 2) {
    printAltPic(urlDog);
  } 
  // else {
  //   printPic(3);
  // }
};

for (const button of buttons) {
  button.addEventListener('click', getSomething);
};