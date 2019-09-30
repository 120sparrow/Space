'use strict';

let headerPage = document.querySelector('.header-page');
let headerNav = headerPage.querySelector('.header-nav');


window.addEventListener('scroll', trackScroll);

let coord = [];

function trackScroll() {
  let scroll = window.pageYOffset;
  coord.push(scroll);
  let arr = coord.slice(-2);

  if (arr[0] < arr[1] && scroll > 200) {
     headerNav.classList.add('header-nav-top');
     headerNav.classList.remove('header-nav-bottom');
   }

  if (arr[0] >= arr[1]) {
    headerNav.classList.add('header-nav-bottom');
    headerNav.classList.remove('header-nav-top');
 }

};
