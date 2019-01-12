
//карта яндекс
ymaps.ready(function () {
  let myMap = new ymaps.Map('map', {
    center: [59.916933, 30.280519],
    zoom: 17,
    controls: [],
  },
  {
    suppressMapOpenBlock: true,
    searchControlProvider: 'yandex#search'
  }),

  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/icon_pin.svg',
      // Размеры метки.
      iconImageSize: [20, 26],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38]
  });

  myMap.behaviors.disable('scrollZoom'),
  myMap.geoObjects.add(myPlacemark);

  myMap.controls.add('zoomControl', {
    size: "large"
  });
});

export default map;
