// Файл main.js
'use strict';
(function () {
  var KEY_CODE_ENT = 25;
  var navigation = document.querySelector('.navigation')
  var buttonMenu = navigation.querySelector('.navigation__toggle');
  var navigationWrapper = navigation.querySelector('.navigation__wrapper');

  navigation.classList.remove('navigation--nojs');

  /**
  * @name changeNavigationClass
  * @description функция переключения класса навигации
  */
  var changeNavigationClass = function () {
    navigation.classList.toggle('navigation--opened');
  };

  /**
  * @name buttonMenuClickHandler
  * @description функция обработчик при нажатии на кнопку меню
  */
  var buttonMenuClickHandler = function () {
    changeNavigationClass();
  };

  /**
  * @name buttonMenuPrsEnterHandler
  * @description функция обработчик при нажатии на кнопку меню клавишей Enter
  * @param {*} evt
  */
  var buttonMenuPrsEnterHandler = function (evt) {
    if (evt.keyCode === KEY_CODE_ENT) {
      changeNavigationClass();
    }
  };

  buttonMenu.addEventListener('click', buttonMenuClickHandler);
  buttonMenu.addEventListener('keydown', buttonMenuPrsEnterHandler);
})();
