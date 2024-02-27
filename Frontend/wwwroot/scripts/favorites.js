function getFavoritesOrder() {

	const codes = [];
	const favorites = document.getElementsByClassName("favbutton-container");

	for (let i = 0; i < favorites.length; i++) {

		const favorite = favorites[i].getElementsByClassName("navbutton");

		for (let j = 0; j < favorite.length; j++) {
			const code = favorite[j].getAttribute("code");
			if (code) codes.push(code);
		}

	}

	return codes.join(" ");

}

function enableFavoritesSorting() {

	const favorites = document.getElementsByClassName("favbutton-container");
	Array.prototype.map.call(favorites, (list) => { Array.prototype.map.call(list.children, (item) => { enableFavoriteDragging(item) }); });

}

function enableFavoriteDragging(item) {

	item.ondrag = handleFavoriteDrag;
	item.ondragstart = handleFavoriteDragStart;
	item.ondragover = handleFavoriteDragOver;
	item.ondragend = handleFavoriteDragEnd;
	item.setAttribute('draggable', true)

}

function handleFavoriteDrag(item) {

	const selectedItem = item.target, list = selectedItem.parentNode, x = event.clientX, y = event.clientY;
	selectedItem.classList.add('favbutton-dragging');

	let swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);

	if (list === swapItem.parentNode) {

		swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
		list.insertBefore(selectedItem, swapItem);

	}

}

function handleFavoriteDragStart(item) {

	item.dropEffect = "move";
	favoriteInnerContent = this.innerHTML;

}

function handleFavoriteDragOver(item) {

	item.preventDefault();
	item.stopPropagation();
	item.stopImmediatePropagation();
	item.dataTransfer.dropEffect = "move";

}

function handleFavoriteDragEnd(item) {

	this.innerHTML = favoriteInnerContent;
	item.target.classList.remove('favbutton-dragging');
	DotNet.invokeMethodAsync("Hephaestus.Frontend", "TriggerFavoritesReorder", getFavoritesOrder())

}