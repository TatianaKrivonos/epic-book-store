import createElement from './createElement.js';

function insertElement(dataProducts, template) {

	dataProducts.forEach((product) => {
		const productCard = createElement(product, template);
		const catalogList = document.querySelector(template.wrap);

		catalogList.appendChild(productCard);
	})
}

export default insertElement;
