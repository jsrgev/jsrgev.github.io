const robots = [{
		id: 1,
		name: 'Leanne Graham',
		username: 'Bret',
		email: 'Sincere@april.biz',
		image: 'https://robohash.org/1?200x200'
	},
	{
		id: 2,
		name: 'Ervin Howell',
		username: 'Antonette',
		email: 'Shanna@melissa.tv',
		image: 'https://robohash.org/2?200x200'
	},
	{
		id: 3,
		name: 'Clementine Bauch',
		username: 'Samantha',
		email: 'Nathan@yesenia.net',
		image: 'https://robohash.org/3?200x200'
	},
	{
		id: 4,
		name: 'Patricia Lebsack',
		username: 'Karianne',
		email: 'Julianne.OConner@kory.org',
		image: 'https://robohash.org/4?200x200'
	},
	{
		id: 5,
		name: 'Chelsey Dietrich',
		username: 'Kamren',
		email: 'Lucio_Hettinger@annie.ca',
		image: 'https://robohash.org/5?200x200'
	},
	{
		id: 6,
		name: 'Mrs. Dennis Schulist',
		username: 'Leopoldo_Corkery',
		email: 'Karley_Dach@jasper.info',
		image: 'https://robohash.org/6?200x200'
	},
	{
		id: 7,
		name: 'Kurtis Weissnat',
		username: 'Elwyn.Skiles',
		email: 'Telly.Hoeger@billy.biz',
		image: 'https://robohash.org/7?200x200'
	},
	{
		id: 8,
		name: 'Nicholas Runolfsdottir V',
		username: 'Maxime_Nienow',
		email: 'Sherwood@rosamond.me',
		image: 'https://robohash.org/8?200x200'
	},
	{
		id: 9,
		name: 'Glenna Reichert',
		username: 'Delphine',
		email: 'Chaim_McDermott@dana.io',
		image: 'https://robohash.org/9?200x200'
	},
	{
		id: 10,
		name: 'Clementina DuBuque',
		username: 'Moriah.Stanton',
		email: 'Rey.Padberg@karina.biz',
		image: 'https://robohash.org/10?200x200'
	}
];

const main = document.querySelector("main");

const createDiv = (robot) => {
	let div = document.createElement("div");
	div.setAttribute("id", robot.id);

	let img = document.createElement("img");
	img.setAttribute("src", robot.image);
	div.appendChild(img);

	let h2 = document.createElement("h2");
	h2.textContent = robot.name;
	div.appendChild(h2);

	let p = document.createElement("p");
	p.textContent = robot.email;
	div.appendChild(p);

	main.appendChild(div);
}

const createAll = () => {
	for (robot of robots) {
		createDiv(robot);
	}
}

createAll();

const deleteAll = () => {
	let allDivs = document.querySelectorAll("div");
	for (div of allDivs) {
		div.remove();
	}
}

const intializeFilter = () => {
	if (input == "") {
		createAll();
		return;
	}
	deleteAll();
	filter();
}

const filter = () => {
	let inputArray = input.value.trim().split(" "); //segments input if there are spaces
	for (robot of robots) {
		let matches = 0;	// to count how many segments of input produce a match
		for (segment of inputArray) {
			let nameArray = robot.name.split(" "); 
			for (partOfName of nameArray) { //any part of name (title, first, last) can produce a match
				if (partOfName.toLowerCase().search(segment.toLowerCase()) === 0) {
					matches++;
					break; // so points don't accumulate if multiple parts of name happen to match same segment
				}
			}
		}
		if (matches === inputArray.length) { // if all segments have a match
		createDiv(robot);
		}
	}
}


let input = document.querySelector("input");
input.addEventListener("keyup", intializeFilter);
