import './myStyle.css';
import _ from 'flexboxgrid';

window.onload = function(){
	console.log("hello")
	setInterval(function(){loadPage();}, 1000);
}

function loadPage(){
	document.getElementsByTagName("body")[0].style.display = "block";
}

function animateMenuBtn(x){
	var leftDot = x.getElementsByTagName('span')[0];
	var midDot = x.getElementsByTagName('span')[1];
	var midDot2 = x.getElementsByTagName('span')[2];
	var rightDot = x.getElementsByTagName('span')[3];
	leftDot.classList.toggle("moveRight");
	rightDot.classList.toggle("moveLeft");

	midDot.classList.toggle("grow");
	midDot2.classList.toggle("grow2");

	toggleMenu();

	document.getElementById("mobile-items").classList.toggle("fadeInRight");
}


function toggleMenu(){
	var menu = document.getElementById("mobile-menu");
	if(menu.classList.contains("fadeIn"))
		menu.classList.replace("fadeIn", "fadeOut");
	else
		menu.classList.replace("fadeOut","fadeIn");
}
window.animateMenuBtn = animateMenuBtn;