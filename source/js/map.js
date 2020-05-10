var myMap;
      ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
      function init () {
        myMap = new ymaps.Map("map", {
          center: [59.93869121515712,30.323054950139095], // Координаты центра карты
          zoom: 16 // Zoom
        });

        var myPlacemark = new ymaps.Placemark([59.93869121515712,30.323054950139095], {
        balloonContentHeader: 'Приглашаем к сотрудничеству дилеров!',
        balloonContentBody: 'г. Санкт-Петербург',
        balloonContentFooter: 'ул. Большая Конюшенная, д. 19/8',
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pin.png',
        iconImageSize: [55, 50],
        iconImageOffset: [-25, -50]
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
      }
