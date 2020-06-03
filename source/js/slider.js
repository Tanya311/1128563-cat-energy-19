// Файл slider.js
"use strict";
(function () {
  var sliderBefore = document.querySelector(".example__slider-label--before");
  var sliderAfter = document.querySelector(".example__slider-label--after");
  var imageBefore = document.querySelector(".example__image--before");
  var imageAfter = document.querySelector(".example__image--after");
  var rangeScale = document.querySelector(".example__range-scale");
  var slider = document.querySelector(".example__range-controls");
  var widthPhoto = 696;

  function getWindowWidth() {
    return window.innerWidth || document.body.clientWidth;
  }

  /**
   * @name sliderAfterClickHandler
   * @description функция обработчик при нажатии на кнопку слайдера СТАЛО
   */
  var sliderAfterClickHandler = function () {
    imageBefore.style = "display: none;";
    imageAfter.style = "display: block";
    imageBefore.style.clip = "rect(0, 0, auto, auto)";
    imageAfter.style.clip = "rect(0, auto, auto, 0)";
    if (getWindowWidth() < 768) {
      rangeScale.style = "width: 100%"
    } else {
      rangeScale.style = "left: 100%"
    }
  };

  /**
   * @name sliderBeforeClickHandler
   * @description функция обработчик при нажатии на кнопку слайдера БЫЛО
   */
  var sliderBeforeClickHandler = function () {
    imageAfter.style = "display: none;";
    imageBefore.style = "display: block;";
    imageBefore.style.clip = "rect(0, " + widthPhoto + "px, auto, auto)";
    imageAfter.style.clip = "rect(0, auto, auto, " + widthPhoto + "px)";
    if (getWindowWidth() < 768) {
      rangeScale.style = "width: 0px"
    } else {
    rangeScale.style = "left: 0px"
    }
  };

  /**
   * @name rangeScaleClickHandler
   * @description функция обработчик при нажатии на кнопку слайдера
   */
  var rangeScaleClickHandler = function (clip) {
    imageBefore.style = "display: block;";
    if (clip <= 150) {
      imageBefore.style = "display: none;";
    }
    imageAfter.style = "display: block";
    imageBefore.style.clip = "rect(0, " + clip + "px, auto, auto)";
    imageAfter.style.clip = "rect(0, auto, auto, " + clip + "px)";
  };

  sliderAfter.addEventListener("click", sliderAfterClickHandler);
  sliderBefore.addEventListener("click", sliderBeforeClickHandler);
  rangeScale.addEventListener("click", rangeScaleClickHandler)
  //rangeScale.addEventListener("click", rangeScaleClickHandler);



var effectLevelPinMousedownHandler = function (evt) {
  evt.preventDefault();

  var sliderWidth = slider.offsetWidth;
  var startCoords = evt.clientX;

  var effectLevelPinMouseMoveHandler = function (moveEvt) {
    moveEvt.preventDefault();

    var shift = startCoords - moveEvt.clientX;
    var rangeScaleCoordX = rangeScale.offsetLeft - shift;

    startCoords = moveEvt.clientX;

    if (!(rangeScaleCoordX < 0 || rangeScaleCoordX > sliderWidth)) {

      rangeScale.style.left = rangeScaleCoordX + 'px';
      var clip = widthPhoto - 2 * rangeScaleCoordX;
      console.log(rangeScaleCoordX);
      rangeScaleClickHandler(clip);
    }
  };

  var effectLevelPinMouseUpHandler = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', effectLevelPinMouseMoveHandler);
    document.removeEventListener('mouseup', effectLevelPinMouseUpHandler);
  };

  document.addEventListener('mousemove', effectLevelPinMouseMoveHandler);
  document.addEventListener('mouseup', effectLevelPinMouseUpHandler);
};

rangeScale.addEventListener('mousedown', effectLevelPinMousedownHandler);

})();
