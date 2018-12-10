// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   console.log('DOM ready');
// });


import insertElement from './modules/insertElement.js';
import dataProducts from './modules/dataProducts.js';
import bookCardTemplate from './modules/bookCardTemplate.js';
import sendRequest from './modules/sendRequest.js';
import createDataAjax from './modules/createDataAjax.js';

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

	// console.log(sendRequest(createDataAjax()));

		

	//вешаем слушатели на табы
	const tabsWrap = document.querySelector('.j-tabs');
	const tabsArray = Array.from(tabsWrap.children);

	tabsArray.forEach(function(tab) {
		const link = tab.firstElementChild;
		link.addEventListener('click', function(event) {
			event.preventDefault();
			data.type = event.target.dataset.type;

			const dataAjax = createDataAjax();

			sendRequest(dataAjax);

		});
		
	});

	//функция подготовки url'a для GET запроса
	function createDataAjax(){
		if (window.matchMedia("(min-width: 768px)").matches) {
			data.perPage = 8;
		} else {
			data.perPage = 3;
		}
		return `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data.page}/${data.perPage}/${data.type}`;
	}

	// function sendRequest(data){
	// 		let xhr = new XMLHttpRequest;

	// 		xhr.open('GET', data);

	// 		xhr.send();

	// 		xhr.onreadystatechange = function(){
	// 			if(xhr.readyState === 4 && xhr.status === 200) {
	// 				return xhr.responseText;
	// 				const request = JSON.parse(xhr.responseText);

	// 				if (document.querySelector(bookCardTemplate.wrap)) {
	// 					const wrap = document.querySelector(bookCardTemplate.wrap);

	// 					if (wrap.children) {
	// 						wrap.innerHTML = '';
	// 					}

	// 					insertElement(request.items, bookCardTemplate);
	// 				}

	// 			} else {
	// 				console.log(`Жду загрузки: ${xhr.readyState}`);
	// 			}
	// 		}
	// 	};
	


	

