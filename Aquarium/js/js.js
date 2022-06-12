let numberOfFishes = randomNumber(3, 10);
let randomFish;
let fish;

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

$(document).ready(function(){
    fish = new Array();
    fish[0]="Images/fish1.png";
    fish[1]="Images/fish2.png";
    fish[2]="Images/fish3.png";

    for(i = 0; i < numberOfFishes; i++){
        randomFish = randomNumber(0, 2);
        $("ul").append("<li id='fish" + i + "'><img src='" + fish[randomFish] + "'></li");
        fishyGoSwim("fish" + i);
    }

    $("#drawFishes").click(function(ev){
        $("li").each(function(){
            $(this).stop();
            setTimeout(fishyGoMove($(this).attr("id"),ev.pageY,ev.pageX,1000),1000);
        });
    });
});

function fishyGoSwim(fish){
    let top = Math.random() * ($(document).height() - 50) + "px";
    let left = Math.random() * ($(document).width() - 50) + "px";
    let movingTime = 1000 + Math.random() * 1000;
    fishyGoMove(fish, top, left, movingTime);
}

function fishyGoMove(fish, top, left, movingTime){
    let newTop = top;
    let newLeft = left;
    $("#"+fish).animate({
        "left": newLeft,
        "top": newTop},
        movingTime, function(){fishyGoSwim(fish);
        });
}


// function PauseFishesOnWindowResize() {
//      Couldn't do this....
//   }