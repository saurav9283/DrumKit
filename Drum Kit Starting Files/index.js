 // detecting button press
var NUmberofDrumButton = document.querySelectorAll(".drum").length;

for(var i = 0; i < NUmberofDrumButton; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);        
        buttonAnimation(buttonInnerHTML);
    }); 
}
// default:colsole.log(buttonInnerHTML);

 // detecting which buttone is press and detect the sound
 document.addEventListener("keypress", function(event){
    makeSound(event.key); // which keyboard kwy was pressed
    buttonAnimation(event.key);

 })

 function makeSound(key)
 {
    switch (key) {
        case "w":
            var tom1  = new Audio("sounds/tom-1.mp3");
            tom1.play();  
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();  
            break;

        case "d":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();  
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();  
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();  
            break;
        case "l":
            var kick = new Audio("sounds/tom-3.mp3");
            kick.play();  
            break;
    }
 }


 function buttonAnimation(currKey)
 {
    var activebutton = document.querySelector("."+currKey); 
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
 }