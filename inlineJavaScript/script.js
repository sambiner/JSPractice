// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "elem" is an abbreviation for "the element that was clicked in the HTML"
function turnOrange(elem){
	elem.classList.add("orange");
}

function toggleOpaque(elem){
	elem.classList.toggle("opaque");
}

function disappear(elem){
	elem.classList.add("display-none");
}

function turnGreen(elem){
	elem.classList.remove("red");
	elem.classList.add("green");
}

function makeTall(elem){
	elem.classList.add("height");
}

function changeColor(color){
	document.body.style.background = color;
}

function bodyBlack(elem){
	changeColor("black");
}

function addText(elem){
	document.getElementById("text").innerHTML = "Wow, this is pretty easy!";
}

function changeImg(elem){
	document.getElementById("img").src="images/mark_zuckerberg.jpg";
}

function momoImg(elem){
	document.body.style.backgroundImage = "url('images/momo.jpg')";
}
// These W3Schools links show efficient ways of completing some of the challenges!
// https://www.w3schools.com/jsref/prop_style_height.asp
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_visibility