let arm = document.querySelector(".rightarm");

let isUp = false;

document.onclick = function () 
{
    if (isUp === false) 
    {
    arm.style.transform = "rotate(-60deg)";
    isUp =true;                                     
    }
        else 
        {
            arm.style.transform = "rotate(0deg)";
            isUp = false;
        }
};

let mouth = document.querySelector(".mouth");
let button = document.querySelector(".ver_mas");

let isSad = false;

button.onclick = function () {
  if (isSad === false) {
    mouth.style.borderRadius = "50px 50px 0 0"; 
    mouth.style.top = "90px";                    
    isSad = true;
  } else {
    mouth.style.borderRadius = "0 0 50px 50px";  
    mouth.style.top = "80px";                    
    isSad = false;
  }
};

let speakbutton = document.querySelector(".speak");

speakbutton.onclick = function () {
alert ("tengo mucha hambre");
}

let powerbutton = document.querySelector(".power");
let fire = document.querySelector(".fire");
let fireVisible = false;

powerbutton.onclick = function () {
    fire.style.display = "block";
};
fire.onclick = function () {
    fire.style.display = "none";
};

let colorbutton = document.querySelector(".color");
let head = document.querySelector(".head");

let isGreen = false;

colorbutton.onclick = function () {
    if (isGreen === false) {
        head.style.backgroundColor = "green";
        isGreen = true;
    } else {
        head.style.backgroundColor = "rgb(157, 80, 157)";
        isGreen = false;
    }   
}
