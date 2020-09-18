
/* ==================================================
Loads functions after HTML is done loading.
================================================== */
window.onload=function() {
	document.getElementById('ask-button-id').addEventListener('click', loadMemeAnswer);
	
}

/* ==================================================
Array of gifs. Might not need this.
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
	var randomNumber = Math.floor(Math.random() * 3) + 1;
	var img = new Image();
	img.src = "yes0" + randomNumber + ".gif";
	/*
	if (!meme-opened) {
		document.getElementById('meme-area').style.display = 'block';
		// document.getElementById('meme-area').style.opacity = 1;
	}
	*/
    var val = document.getElementById("main-id-image").att
 
    console.log(val);
    document.getElementById("meme-area-id").src = img.src;
    
}





/* ==================================================

================================================== */