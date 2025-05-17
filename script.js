var timer = 20;
var score = 0;
var hitrn = 0;

function  getNewHit() {
 hitrn = Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent = hitrn ;

}

function makeBubble()
{
    var clutter =" ";
for(var i = 1;i<=150;i++){
 var random =   Math.floor (Math.random()*10)
clutter += `<div class="bubble">${random}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer(){
    var timerint = setInterval(function () {
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
        }
        
    },1000);
}
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
   
}
document.querySelector("#pbtm").addEventListener("click",
    function (dets){
       var clickedNum = Number(dets.target.textContent);
       if(clickedNum===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
       }
        
    });
runTimer();
makeBubble();
getNewHit();
