// JavaScript Document
var dictionary = [["cat","dog","elephant","rabbit","deer"],["apple","orange","peach","kiwi","apricot"],["car","bicycle","boat","aeroplane","truck"],["badminton", "tennis", "soccer","baseball","hockey"]];
var random_number = Math.floor((Math.random() * 5) + 1);
var random_word = "";
var display = "";
var guessed = "";
var tries = 0;
var matched = false;
var complete=false;
var gameover=false;	

function displayWord(){
for (i=0;i<(random_word.length);i++){
    if ((random_word[i]=="a") || (random_word[i]=="e") || (random_word[i]=="i") || (random_word[i]=="o") || (random_word[i]=="u")){
        display+=random_word[i];
    }
	else{
		display+="_";
	}
}
document.getElementById("word").innerHTML = display;
}

function categorySelect(){
	if (document.getElementById("Animals").checked === true){
	random_word = dictionary[0][random_number];
	displayWord();
	}
	if (document.getElementById("Fruits").checked === true){
	random_word = dictionary[1][random_number];
	displayWord();
	}
	if (document.getElementById("Transport").checked === true){
	random_word = dictionary[2][random_number];
	displayWord();
	}
	if (document.getElementById("Sport").checked === true){
	random_word = dictionary[3][random_number];
	displayWord();
	}
	
}

function drawStickman(){
	 if (tries==1){
	 document.getElementById("hangman").src="images/Hangman-1.png"}
	 	 if (tries==2){
	 document.getElementById("hangman").src="images/Hangman-2.png"}
	 	 if (tries==3){
	 document.getElementById("hangman").src="images/Hangman-3.png"}
	 	 if (tries==4){
	 document.getElementById("hangman").src="images/Hangman-4.png"}
	 	 if (tries==5){
	 document.getElementById("hangman").src="images/Hangman-5.png"}
	 	 if (tries==6){
	 document.getElementById("hangman").src="images/Hangman-6.png"}
}



function getGuess(){
    var guess = document.getElementById("guessbox").value;
	if (gameover==false){
	if (tries<6){
	if (guess.length == 1){ 
		for (i=0;i<(random_word.length);i++){
            if (random_word[i]==guess){ 
                matched=true;
			}
		}
        if (matched){	
            for (i=0;i<(random_word.length);i++){
                if (random_word[i]==guess){
                    var sfront = display.slice(0,i);
					var sback = display.slice(i+1,random_word.length);
					display=sfront + guess + sback;
                }
            }
        document.getElementById("word").innerHTML = display;
		matched=false;
        }
        else {
            guessed += guess;
            guessed += ",";
            tries +=1;
        }
    }
	else{
        document.getElementById("guessbox").value="Please enter a single letter";
	}
	document.getElementById("guessed").innerHTML = guessed;
	complete=true;
	for (i=0;i<display.length;i++){
		if (display[i] == "_"){
		complete=false;
		}
	}
	if (complete==true){
		document.getElementById("result").innerHTML = "You Win!";
		gameover=true;
	}
	drawStickman();
}
else {
	document.getElementById("result").innerHTML = "You Lose! The answer was" + " " + random_word;
}
}
}