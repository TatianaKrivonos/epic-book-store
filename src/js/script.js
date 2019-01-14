import insertElement from '../js/modules/insertElement.js';
import bookCardTemplate from '../js/modules/bookCardTemplate.js';
// import map from '../js/modules/map.js';

//карта google
// function initMap() {
//       let coordinates = {lat: 59.921721, lng: 30.312250};

//       let mapOptions = {
//         center: coordinates,
//         zoom: 16,
//         scrollwheel: false,
//         disableDefaultUI: false
//       };

//       image = '../img/icon_pin.svg';
//       marker = new google.maps.Marker({
//         position: coordinates,
//         map: map,
//         icon: image
//       });

//       map = new google.maps.Map(document.getElementById('map'), mapOptions)
// }

//   google.maps.event.addDomListener(window, "load", initMap);

// кнопка меню
let toggle = document.getElementById('toggle');
  toggle.addEventListener('click', menuVisible);
  function menuVisible(e) {
    e.preventDefault();
    toggle.classList.toggle('toggle--close');
    document.getElementById('menuList').classList.toggle('main-nav__list--open');
  };


//jQuery
$(document).ready(function(){
  $('.j-slider').slick({
    infinite: false
  });

  $(".catalog__tab-link--all").addClass("active");

  $(".catalog__tab-link").on("click", function(){
    $(".catalog__tab-link").removeClass("active");
    $(this).addClass("active");
  });

  $(".paginator__link--first").addClass("active");

  $(".paginator__link").on("click", function(){
    $(".paginator__link").removeClass("active");
    $(this).addClass("active");
  });

  $(".books__descr-btn").click(function(){
    $(".books__descr-text--hide").toggle('slow');
  });
});

//объект данныхдля ajax запроса
const data = {
  page: 1,
  perPage: 8,
  type: ''
};

const wrap = document.querySelector(bookCardTemplate.wrap);
if(wrap) {
  const dataAjax = createDataAjax();

  sendRequest(dataAjax, function(responseObj){
    if (wrap.children) {
      wrap.innerHTML = '';
    }

  insertElement(responseObj.items, bookCardTemplate);
  });
}

console.log(sendRequest(createDataAjax()));



//функция подготовки url'a для GET запроса
function createDataAjax(){
  if (window.matchMedia("(min-width: 768px)").matches) {
    data.perPage = 8;
  } else {
    data.perPage = 3;
  }
  return `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data.page}/${data.perPage}/${data.type}`;
}

//вешаем слушатели на табы
const tabsWrap = document.querySelector('.j-tabs');
const tabsArray = Array.prototype.slice.call(tabsWrap.children);

tabsArray.forEach(function(tab) {
  const link = tab.firstElementChild;
  link.addEventListener('click', function(event) {
    event.preventDefault();
    data.type = event.target.dataset.type;

    if (window.matchMedia("(min-width: 768px)").matches) {
      data.perPage = 8;
    } else {
      data.perPage = 3;
    }

    const dataAjax = `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data.page}/${data.perPage}/${data.type}`;
    console.log(dataAjax);

    sendRequest(dataAjax);

  });

});

function sendRequest(data){
  let xhr = new XMLHttpRequest;

  xhr.open('GET', data);

  xhr.send();

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200) {
      const request = JSON.parse(xhr.responseText);
      console.log(request);

      if (document.querySelector(bookCardTemplate.wrap)) {
        const wrap = document.querySelector(bookCardTemplate.wrap);

        if (wrap.children) {
          wrap.innerHTML = '';
        }

        insertElement(request.items, bookCardTemplate);
      }

    } else {
      // console.log(xhr.responseText);
      console.log(`Жду загрузки: ${xhr.readyState}`);
    }
  }
};

