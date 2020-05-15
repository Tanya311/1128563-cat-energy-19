"use strict"
var myMap;
  ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
  function getWindowWidth() {
    return window.innerWidth || document.body.clientWidth;
  }

  function init () {
    if (getWindowWidth() < 1300) {
      myMap = new ymaps.Map("map", {
        center: [59.938816, 30.323167], // Координаты центра карты
        zoom: 16 // Zoom
      });
    } else {
      myMap = new ymaps.Map("map", {
        center: [59.938915, 30.319470], // Координаты центра карты
        zoom: 17 // Zoom
      });
    }

    if (getWindowWidth() < 768) {
    var myPlacemark = new ymaps.Placemark([59.938816, 30.323167], {
      balloonContentHeader: "Приглашаем к сотрудничеству дилеров!",
      balloonContentBody: "г. Санкт-Петербург",
      balloonContentFooter: "ул. Большая Конюшенная, д. 19/8",
    }, {
      iconLayout: "default#image",
      iconImageHref: "img/map-pin.png",
      iconImageSize: [55, 53],
      iconImageOffset: [-27.5, -53]
    });
    } else {
      var myPlacemark = new ymaps.Placemark([59.938816, 30.323167], {
        balloonContentHeader: "Приглашаем к сотрудничеству дилеров!",
        balloonContentBody: "г. Санкт-Петербург",
        balloonContentFooter: "ул. Большая Конюшенная, д. 19/8",
      }, {
        iconLayout: "default#image",
        iconImageHref: "img/map-pin.png",
        iconImageSize: [113, 106],
        iconImageOffset: [-60.5, -106]
      });
    }

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
}
