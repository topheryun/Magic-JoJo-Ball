
window.onload=function() {
	document.getElementById('ask-button-id').addEventListener('click', loadMemeAnswer);
}

/* ==================================================
Array of gifs. Might not need this. Marc says it might
have a use later
================================================== */
var memeAnswers = [
	"yes01.gif",
	"yes02.gif",
	"yes03.gif"
];

/* ==================================================
This function activates when the "Ask" button is pressed.
It chooses a random meme answer and displays it.
================================================== */
function loadMemeAnswer() {
	/*
	var img = new Image();
	img.src = getImageSourceString();
	
	if (!meme-opened) {
		document.getElementById('meme-area').style.display = 'block';
		// document.getElementById('meme-area').style.opacity = 1;
	}
	*/

	document.getElementById("meme-area-id").src = getImageSourceString();
	// console.log("meme-area-id");
}

/* ==================================================
Retrieve yes/no/maybe gif string with a 2/1/1 ratio
================================================== */
function getImageSourceString() {
	// 0-1: yes, 2: no, 3: maybe
	var answerType = Math.floor(Math.random() * 4);
	
	if (answerType <= 1) { // yes
		var randomNumber = Math.floor(Math.random() * 3) + 1;
		return "yes0" + randomNumber + ".gif";
	}
	else if (answerType == 2) { // no
		var randomNumber = Math.floor(Math.random() * 3) + 1;
		return "no0" + randomNumber + ".gif";
	}
	else if (answerType == 3) { // maybe
		var randomNumber = Math.floor(Math.random() * 4) + 1;
		return "maybe0" + randomNumber + ".gif";
	}
	
}



/* ==================================================

================================================== */