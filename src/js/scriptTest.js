import insertElement from './modules/insertElement.js';
import dataProducts from './modules/dataProducts.js';
import bookCardTemplate from './modules/bookCardTemplate.js';


	if (document.querySelector(bookCardTemplate.wrap)) {
		const wrap = document.querySelector(bookCardTemplate.wrap);

		insertElement(dataProducts.products, bookCardTemplate);
	}
