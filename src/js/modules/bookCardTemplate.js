
const bookCardTemplate = {
	wrap: '.catalog__list',
	tag: 'article',
	tagClass: 'product-card',
	setContent: function(product) {
		return `<a href="${product.link}">
			       <h3 class="product-card__title">${product.name}</h3>
			    </a>
				<a href="books.html" class="product-card__img-wrap">
					<img src="./img/books_all/${product.uri}.png" alt="${product.name}" class="product-card__img">
				</a>
				<p class="product-card__descr">${product.desc}</p>
					<div class="product-card__price">${product.price} </div>`;
	}
}

export default bookCardTemplate;
