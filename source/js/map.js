'use strict'
var myMap;
      ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
      function init () {
        myMap = new ymaps.Map("map", {
          center: [59.938816, 30.323167], // Координаты центра карты
          zoom: 16 // Zoom
        });

        var myPlacemark = new ymaps.Placemark([59.938816, 30.323167], {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pin.png',
        iconImageSize: [113, 106],
        iconImageOffset: [-60.5, -106]
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
      }
