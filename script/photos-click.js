'use strict';

let hystorys = document.querySelector('.hystory');
let hystoryPhotos = hystorys.querySelectorAll('.hystory-photos');
let fullScreen = document.querySelector('.full-screen');

function clickToImg(imgClick, image, alt, text ) {
  imgClick.addEventListener('click', function() {

  fullScreen.classList.add('full-screen-active');

  let fullImg = fullScreen.querySelector('.full-screen-item-img img');
  let fullText = fullScreen.querySelector('.full-screen-item-description p');
  fullImg.src = image;
  fullImg.alt = alt;
  fullText.textContent = text;

  });
}


for (let i = 0; i < hystoryPhotos.length ; i++) {
  let hystoryImg = hystoryPhotos[i].querySelector('.hystory-photos-img img').getAttribute("src");
  let hystoryAlt = hystoryPhotos[i].querySelector('.hystory-photos-img img').getAttribute("alt");
  let hystoryText = hystoryPhotos[i].querySelector('.hystory-photos-description p').innerHTML;
  clickToImg(hystoryPhotos[i], hystoryImg, hystoryAlt, hystoryText);
}

let fullCloseBtn = fullScreen.querySelector('.full-screen-item-button');

fullCloseBtn.addEventListener('click', function() {

  fullScreen.classList.remove('full-screen-active');

});


document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
  fullScreen.classList.remove('full-screen-active');
  }
});
