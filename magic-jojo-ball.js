var isMemeShowing = false;

window.onload=function() {
	
/* ==================================================
Stuff that happens when the button is pressed.
================================================== */
	document.getElementById('ask-button-id').addEventListener('click', function() {
    loadMemeAnswer();
    toggleHeaderClass();
		toggleButtonClass();
		toggleAbdulClass();
		toggleMeme();
		toggleUserInput();
		toggleTextFieldClass();
		
		if(isMemeShowing) {
			isMemeShowing = false;
		}
		else {
			isMemeShowing = true;
		}
	});
}

function toggleHeaderClass() {

    if (isMemeShowing) { 
				document.getElementById("you-asked-id").innerHTML = "";
        document.getElementById("you-asked-id").classList.toggle("you-asked");
    } else {
        document.getElementById("you-asked-id").innerHTML = "You asked: ";
        document.getElementById("you-asked-id").classList.toggle("you-asked");
    }
}


function toggleUserInput() {
	var userInput = document.getElementById("question-area-id").value;
	
	if (isMemeShowing) {
		document.getElementById("question-title-id").innerHTML = "";
	}
	else {
		document.getElementById("question-title-id").innerHTML = userInput;
	}
}

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
        document.getElementById("main-image-id").src = "images/abdul-text-box.png";
        document.getElementById("main-image-id").classList.toggle("main-image-transition-right");
	}
    else {
        document.getElementById("main-image-id").src = "images/Unit_Muhammad_Avdol_(Swirling_flame).png";
        document.getElementById("main-image-id").classList.toggle("main-image-transition-right");
	}
}

function toggleTextFieldClass() {
	var textArea = document.querySelector('#question-area-id');
	textArea.value = "";
	
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