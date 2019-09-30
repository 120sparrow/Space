'use strict';

let newsItem = document.querySelector('.header-news-item-button');
let newsButton = newsItem.querySelectorAll('button');
let newsImg = document.querySelector('.header-news-img');
let newsImgActive = newsImg.querySelectorAll('.header-news-img-item');
let newsHeading = document.querySelector('.header-news-heading');
let headingActive = newsHeading.querySelectorAll('.header-news-heading-item');
let newsInfo = document.querySelector('.header-news-heading-item-info');


function newsButtonClick(buttonNumber, arrayButton, imgNumber, arrayImg, newsHeading, arrayHeading) {
  buttonNumber.addEventListener('click' , function(){
  for(let item of arrayButton) {
   item.classList.remove('news-active');
 };
  for (let itemImg of arrayImg) {
  itemImg.classList.remove('header-news-img-active');
 };
 for (let itemHeading of arrayHeading) {
   itemHeading.classList.remove('header-news-heading-active');
 };

  buttonNumber.classList.add('news-active');
  imgNumber.classList.add('header-news-img-active');
  newsHeading.classList.add('header-news-heading-active');
  newsInfo.classList.remove('info-active');
  newsHeading.querySelector('.header-news-heading-item-info').classList.add('info-active');
  });
}

for (var i = 0; i < newsButton.length; i++) {
  newsButtonClick(newsButton[i], newsButton, newsImgActive[i], newsImgActive, headingActive[i], headingActive);
}
