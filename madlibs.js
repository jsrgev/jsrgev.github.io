let inputs = document.querySelectorAll("input");
let button = document.querySelector("#lib-button");
button.addEventListener("click",generate);

let previousRandom = "";

function generate() {
	for (input of inputs) {
		if (input.value == "") { 
			alert("Please fill in all the words!");
			return;
		}
	}
	let span = document.querySelector("#story");
	span.textContent="";

	let adjective1 = document.querySelector("#adjective1").value;
	let noun = document.querySelector("#noun").value;
	let adjective2 = document.querySelector("#adjective2").value;
	let name = document.querySelector("#person").value;
	let verb = document.querySelector("#verb").value;
	let place = document.querySelector("#place").value;


let stories =
	[`<p>I was waiting at a small train station when a ${adjective1} man put up a sign regarding my train: “30-Minute Delay.” “What happened?” I asked.</p><p>“The conductor was busy ${verb} and the train ran into a ${adjective2} ${noun},” he said.</p><p>“How long will that take to fix?”</p><p>“Quite a few hours," he replied. "${name} has to get here from ${place}, and then there's still the ${noun} to put back together too.”</p><p>“So why put up a sign saying it would take 30 minutes?”</p><p>“It’s the only sign we have.”</p>`,
	`<p>I was waiting outside the post office one day when ${name} came over to me and asked, "Do you know who that ${adjective1} ${noun} across the street belongs to? I'd like to take it with me back to my ${adjective2} house in ${place}."</p><p>"Go back to your ${verb}," I answered, "that ${noun} belongs to me and it's staying right where it is."`,
	`<p>Last year my friends and I went to ${place} to celebrate my birthday. One friend gave me a ${adjective2} ${noun}. Another gave me a ${adjective1} ${noun}. Since I had two, I gave the ${adjective1} one to ${name}, who couldn't stop ${verb} from excitement.</p>`,
	`<p>${name} awoke from a terrible nightmare. In the dream, there was a ${noun}, and then another, and another - each more ${adjective2} than the last, all ${verb} in a row. "Now you're coming with us to ${place}!" they shouted.</p><p>"But how could I go there?!" ${name} cried. "It's too ${adjective1}!</p>`,
	`<p>Since elections last week, ${place} has been engulfed in chaos. It all began when the results were thrown away and a ${adjective2} ${noun} was declared the winner. Since then, the president has gone into hiding, businesses have shut down, and there has been widespread ${verb} in the streets. A special appeal has been made to ${name} to intervene, and talks may soon be underway. What else can be done? One skeptical resident fleeing the country said, "If someone as ${adjective1} as ${name} can't save us, no one will."</p>`,
	`<p>I was feeling extremely ${adjective2}, so I went to the doctor to get checked out. After doing an x-ray, she said "I'm afraid you've swallowed a ${noun}. It's not uncommon in people who come back from ${place}. ${name} had the same problem just last week. I recommend a lot of ${verb} until you feel more ${adjective1}."</p>`]

	let randomNum;
	do {
		randomNum = Math.floor(Math.random()*(stories.length));
	}
	while (randomNum == previousRandom);
	previousRandom = randomNum;

	let story = stories[randomNum];
	span.innerHTML = story;
}



