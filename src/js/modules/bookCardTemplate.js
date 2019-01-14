
const bookCardTemplate = {
	wrap: '.catalog__list',
	tag: 'div',
	tagClass: 'catalog__col',
	setContent: function(product) {
		return `<article class="product-card">
              <a href="books.html">
			         <h3 class="product-card__title">${product.name}</h3>
			        </a>
				      <a href="books.html" class="product-card__img-wrap">
					      <img src="./img/books_all/${product.uri}.png" alt="${product.name}" class="product-card__img">
				      </a>
				      <p class="product-card__descr">${product.desc}</p>
					    <div class="product-card__price">${product.price} &#8381;</div>
            </article>`;
	}
}

export default bookCardTemplate;
