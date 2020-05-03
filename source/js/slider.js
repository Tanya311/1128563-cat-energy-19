// Файл slider.js
'use strict';
(function () {
  var sliderBefore = document.querySelector('.example__slider-label--before');
  var sliderAfter = document.querySelector('.example__slider-labe--after');
  var imageBefore = document.querySelector('.example__image--before');
  var imageAfter = document.querySelector('.example__image--after');
  var rangeScale = document.querySelector('.example__range-scale');

  /**
  * @name sliderAfterClickHandler
  * @description функция обработчик при нажатии на кнопку слайдера СТАЛО
  */
  var sliderAfterClickHandler = function () {
    imageBefore.style = 'display: none;';
    imageAfter.style = 'display: block; clip: auto;';
  };

  /**
  * @name sliderBeforeClickHandler
  * @description функция обработчик при нажатии на кнопку слайдера БЫЛО
  */
  var sliderBeforeClickHandler = function () {
    imageAfter.style = 'display: none;';
    imageBefore.style = 'display: block; clip: auto;';
  };

  /**
  * @name rangeScaleClickHandler
  * @description функция обработчик при нажатии на кнопку слайдера
  */
  var rangeScaleClickHandler = function () {
    imageAfter.style = 'display:  block; clip: rect(0, auto, auto, 336px)';
    imageBefore.style = 'display: block; clip: rect(0, 336px, auto, auto);';
  };

  sliderAfter.addEventListener('click', sliderAfterClickHandler);
  sliderBefore.addEventListener('click', sliderBeforeClickHandler);
  rangeScale.addEventListener('click', rangeScaleClickHandler);

/*
  rangeScale.addEventListener('mousedown', function (evt) {

    evt.preventDefault();


    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var onMouseMove = function (moveEvt) {

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      rangeScale.style.top = (rangeScale.offsetTop - shift.y) + 'px';
      rangeScale.style.left = (rangeScale.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  });
*/

})();
