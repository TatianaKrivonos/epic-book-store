function createElement (product, template) {
	const productCard = document.createElement(template.tag);
	productCard.classList.add(template.tagClass);
	productCard.innerHTML = template.setContent(product);

	return productCard;
}

export default createElement;

