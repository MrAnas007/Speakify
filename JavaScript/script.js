let myinput = document.querySelector('textarea');
let mybutton = document.querySelector('button');
// let myalert = "Kindly input a message, and once you've done that, I'll be ready to converse with you.";
let myalert = "Type something first, then I can talk.";

mybutton.addEventListener('click', myfunction);
function myfunction() {
    if (myinput.value.trim() === '') {
        let speak = new SpeechSynthesisUtterance(myalert);
        speechSynthesis.speak(speak);
    } else {
        let speak = new SpeechSynthesisUtterance(myinput.value);
        speechSynthesis.speak(speak);
    }
};