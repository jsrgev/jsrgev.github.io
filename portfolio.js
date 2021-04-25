let links = document.querySelectorAll("ul a");

for (link of links) {
	link.addEventListener("click", smoothScroll);
}

function smoothScroll(event) {
	event.preventDefault();
	let href = this.getAttribute("href");
	let offsetTop = document.querySelector(href).offsetTop;

	scroll({
		top: offsetTop,
		behavior: "smooth"
	});
}

let name = Array.from(document.querySelectorAll("aside h1"));
let liItems = Array.from(document.querySelectorAll("aside li"));
let icons = Array.from(document.querySelectorAll("aside div a"));
let asideItems = liItems.concat(icons);
console.log(asideItems);


setTimeout(appear, 1000, name[0]);


function appear(item) {
	item.classList.add("visible");
}

setTimeout(showItems, 1400);


function showItems() {
	itemCount = 0;

	let id = setInterval (function() {
		if (itemCount < asideItems.length) {
			asideItems[itemCount].classList.add("visible");
			itemCount +=1
		} else {
			clearInterval(id);
		}
	}, 100);
}









