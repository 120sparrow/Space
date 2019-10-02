'use strict';

let construction = document.querySelector('.construction');

let itemButton = construction.querySelectorAll('.construction-element-button button');
let itemHeading = construction.querySelectorAll('.construction-info-items span');
let itemImg = construction.querySelectorAll('.construction-img img');
let itemText = construction.querySelectorAll('.construction-text span');

function buttonClick(button, heading, img, text) {

 button.addEventListener('click', function() {

  for (let i = 0; i < itemButton.length; i++) {
    itemButton[i].classList.remove('button-active');
    itemHeading[i].classList.remove('info-active');
    itemImg[i].classList.remove('img-active');
    itemText[i].classList.remove('text-active');
  }

  button.classList.add('button-active');
  heading.classList.add('info-active');
  img.classList.add('img-active');
  text.classList.add('text-active');
 });

}

for (let i = 0; i < itemButton.length; i++) {
  buttonClick( itemButton[i], itemHeading[i], itemImg[i], itemText[i] );
}
