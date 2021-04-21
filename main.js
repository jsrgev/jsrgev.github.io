let num1;
let num2;
let oper;
let result;
let prevOper;

function display(string) {
	document.getElementById("display").textContent = string;
}

function tidy(string) {
	let length = string.toString().length;
	if (string.toString()[0] == "-") {
		length -= 1; // to ignore neg sign when counting 14 char
	}

	let decPlace = string.toString().indexOf(".");

	if (/e/.test(string) ||     //exponential
		(length > 14 && (decPlace < 1 || decPlace > 14))) {
		//if longer than 14, and either there's no decimal or decimal is past 14
		return "TOO LARGE";
	} else {
		if (length > 14 && decPlace > -1) {
			//if it's longer than 14, and there's a decimal
			let roundTo = 13-decPlace;
			if (roundTo < 0) {
				roundTo = 0;
			}
			string = string.toFixed(roundTo); //round so only 14 chars total
			length = string.toString().length;
			while (string.toString()[length-1] == 0 || string.toString()[length-1] == ".") {
				string = string.substr(0,length);
				//get rid of trailing 0s after ".", or final ".""
			}
			return string;
		} else {
			return string;
		}
	}
	console.log(string);
}

function number(num) {
	if (num1 == undefined) {	//4 + 3 = (7) + 5
		if (oper != undefined) {
			//no new num1, but new oper entered
			//for when starting with result after equal
			num1 = result;
			num2 = num; //new input
			display(num2);
			result = undefined;
		} else { //if all vars empty, or new num input after equal
			num1 = num;
			num2 = undefined;
			oper = undefined;
			result = undefined;
			display(num1);
		}
	} else if (oper == undefined) { // if no oper, concat to num1
		if (num1.toString().length < 14) { //ignores if 14 chars already
			num1 = num1.toString().concat(num.toString());
			display(num1);
		}
	} else { //concat to num2
		if (num2 == undefined) { //num1 and oper but no num2
			num2 = num;
			display(num2);
		} else if (num2.toString().length < 14) {
			num2 = num2.toString().concat(num.toString());
			display(num2);
		}
	}
}

function operator(operator) {
	if ((num1 != undefined && num2 == undefined) || 
		//only if there is already num1, but no num2
		(num1 == undefined && result != undefined)) {
		// or: there is a result, and no new num1 input
		oper = operator;
	} else if (num1 != undefined && num2 != undefined && result == undefined) {
		// num1 and num2, but haven't hit equal and doing further operation
		equal();
		oper = operator;
	} //otherwise ignore
}

function equal() {
	if (num1 == undefined && oper == undefined && result != undefined) {
		//no num1, no oper, yes result. if repeatedly hitting =
		num1 = result;
		oper = prevOper;
		// equal();
	}
	preResult = eval(num1 + oper + num2);
	if (isNaN(preResult) == true) {
		oper = undefined; // if input 1 + 2 + =, get rid of oper. otherwise new input will not go to num1
		return; // if equal before num2 input, ignore
	}
	if (preResult == Infinity) {
		display("ERROR"); //if divided by 0
		undefine();
		return;
	}

	result = preResult;
	prevOper = oper;
	oper = undefined;
	num1 = undefined;
	// preResult = tidy(preResult)
	display(tidy(preResult));
	return;
}


function sign() {
	if (num1 != undefined && num2 == undefined) {
		num1 = invert(num1);
		display(num1);
	} else if (num1 != undefined && num2 != undefined) {
		num2 = invert(num2);
		display(num2);
	}
}

function invert(string) {
		if (string > 0) {
			string = "-" + string;
		} else if (string < 0) {
			string = string.substr(1);
		}
		return string;
}


function percent() {
	if (num1 != undefined && num2 == undefined) {
		num1 = num1*.01;
		display(num1);
	} else if (num1 != undefined && num2 != undefined) {
		num2 = num2*.01;
		display(num2);
	}
}


function clearAll() {
	undefine()
	display(0);
}

function undefine() {
	num1 = undefined;
	num2 = undefined;
	oper = undefined;
	result = undefined;
}



var dragItem = document.querySelector("#calculator");
var container = document.querySelector("main");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }

  if (e.target === dragItem) {
    active = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  active = false;
}

function drag(e) {
  if (active) {
  
    e.preventDefault();
  
    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dragItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
