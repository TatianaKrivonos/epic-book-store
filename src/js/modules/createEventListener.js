
function createEventListener() {
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
}

export default createEventListener;