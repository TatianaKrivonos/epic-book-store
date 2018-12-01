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


const dataProducts = {
	products:[
		{
			link: '#',
			title: 'Латеральная логика',
			image: 'book-lateralnaya-logika.jpg',
			description: 'Головоломный путь к нестандартному мышлению',
			price: '500'
		},
		{
			link: '#',
			title: 'Путиводитель по лжи',
			image: 'book-putevoditel-po-lzhi.jpg',
			description: 'Критическое мышление в эпоху пост правды',
			price: '630'
		},
		{
			link: '#',
			title: 'Дао физики',
			image: 'book-dao-fiziki.jpg',
			description: 'Исследование параллелей между современной физикой и восточной философией',
			price: '560'
		},
		{
			link: '#',
			title: 'Не очевидно',
			image: 'book-ne-ochevidno.jpg',
			description: 'Как выявить тренды раньше других',
			price: '365'
		},
		{
			link: '#',
			title: 'Суперпотребители',
			image: 'book-superpotrebiteli.jpg',
			description: 'Кто это и почему они так важны для вашего бизнеса',
			price: '500'
		},
		{
			link: '#',
			title: 'Маркетинг в социальных сетях',
			image: 'book-social-media-marketing.jpg',
			description: '',
			price: '630'
		},
		{
			link: '#',
			title: 'Правильный выбор',
			image: 'book-pravilnyij-vyibor.jpg',
			description: 'Практическое руководство по принятию взвешенных решений',
			price: '560'
		},
		{
			link: '#',
			title: 'Главное в истории искусства',
			image: 'book-glavnoe-v-istorii-iskusstv.jpg',
			description: 'Ключевые работы, темы, направления, техники',
			price: '365'
		}
	]
};

const catalogList = document.querySelector('.catalog__list');
console.log(catalogList);

const productCardMini = document.querySelectorAll('.product-card-mini');

function createCards (dataProducts) {
	const productsArr = dataProducts.products;
	let cardString = ``;

	productsArr.forEach(function(product){
		cardString = cardString + `<article class="product-card-mini">
						<a href="${product.link}">
							<h3 class="product-card-mini__title">${product.title}</h3>
						</a>
						<a href="${product.link}" class="product-card-mini__img-wrap">
							<img src="../epic-book-store/BOOK_STORE/books/${product.image}" alt="${product.title}" class="product-card-mini__img">
						</a>
						<p class="product-card-mini__descr">${product.description}</p>
						<div class="product-card-mini__price">${product.price} P</div>
					</article>`;
	});

	return cardString;
}


function insertElements(data, wrap) {
    const html = createCards(dataProducts);
    wrap.innerHTML = html;
}

insertElements(dataProducts, catalogList);