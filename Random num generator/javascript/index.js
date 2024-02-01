
//select input tag and paragraph
var guessnum=document.getElementById("enternum")
var result1=document.getElementById("result")
var score= document.getElementById("score")
//generate random number
var randomnum=Math.floor(Math.random()*10)+1
var totalscore=10
function check(){
    var checknum=guessnum.value
    if(randomnum==checknum){
        console.log("You are right")
        result1.textContent=" You are Right"
        alert("you won")
    }
    else{
        totalscore=totalscore-1
        score.textContent="Score:"+totalscore
        result1.textContent="You are Wrong"
        if(totalscore==0){
            alert("Better luck next time")
        }
    }
}