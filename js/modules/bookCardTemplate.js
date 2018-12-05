
const bookCardTemplate = {
	wrap: '.catalog__list',
	tag: 'article',
	tagClass: 'product-card-mini',
	setContent: function(product) {
		return `<a href="${product.link}">
			       <h3 class="product-card-mini__title">${product.title}</h3>
			    </a>
				<a href="${product.link}" class="product-card-mini__img-wrap">
					<img src="./img/books/${product.image}" alt="${product.title}" class="product-card-mini__img">
				</a>
				<p class="product-card-mini__descr">${product.description}</p>
					<div class="product-card-mini__price">${product.price} P</div>`;
	}
}

export default bookCardTemplate;