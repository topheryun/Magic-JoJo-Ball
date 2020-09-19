var isMemeShowing = false;

window.onload=function() {
	
/* ==================================================
Stuff that happens when the button is pressed.
================================================== */
	document.getElementById('ask-button-id').addEventListener('click', function() {
		
		loadMemeAnswer();
		toggleButtonClass();
		toggleAbdulClass();
		toggleTextFieldClass();
		toggleMeme();
		
		var textArea = document.querySelector('#question-area-id');
		textArea.value = "";
		
		if(isMemeShowing) {
			isMemeShowing = false;
		}
		else {
			isMemeShowing = true;
		}
		
	});
}

/* ==================================================
Array of gifs. Might not need this. Marc says it might
have a use later
================================================== */
var memeAnswers = [
	"yes01.gif",
	"yes02.gif",
	"yes03.gif",
	"no01.gif",
	"no02.gif",
	"no03.gif",
	"maybe01.gif",
	"maybe02.gif",
	"maybe03.gif",
	"maybe04.gif"
];

function toggleButtonClass() {
	if (isMemeShowing) {
		document.getElementById("ask-button-id").classList.toggle("retry-button");
		document.getElementById("ask-button-id").innerHTML = "Ask";
	}
	else {
		document.getElementById("ask-button-id").classList.toggle("retry-button");
		document.getElementById("ask-button-id").innerHTML = "Ask Again";
	}
}

function toggleAbdulClass() {
	if (isMemeShowing) {
        document.getElementById("main-image-id").classList.toggle("main-image-transition-right");
        //document.getElementById("main-image-id").src = "/Unit_Muhammad_Avdol_(Swirling_flame).png"; Change abdul's image to that
	}
	else {
        document.getElementById("main-image-id").classList.toggle("main-image-transition-right");
	}
}

function toggleTextFieldClass() {
	if (isMemeShowing) {
		document.getElementById("question-area-id").classList.toggle("question-area-incognito");
	}
	else {
		document.getElementById("question-area-id").classList.toggle("question-area-incognito");
	}
}

function toggleMeme() {
	if (isMemeShowing) {
		document.getElementById("meme-area-id").src = "";
	}
}


/* ==================================================
This function activates when the "Ask" button is pressed.
It chooses a random meme answer and displays it.
================================================== */
function loadMemeAnswer() {
	if (!isMemeShowing) {
		document.getElementById("meme-area-id").src = ( "images/" + getImageSourceString() );
	}

	// console.log("meme-area-id");
	
}

/* ==================================================
Retrieve yes/no/maybe gif string with a 2/1/1 ratio
================================================== */
function getImageSourceString() {
	// 0-1: yes, 2: no, 3: maybe
	var answerType = Math.floor(Math.random() * 4);
	// console.log("random numer: " + answerType);
	
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



