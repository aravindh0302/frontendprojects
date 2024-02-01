//selecting input box
let outputscreen=document.getElementById("outputscreen");
//entered value to be added
function display(num){
    outputscreen.value+=num;

}
//Function for equalto button
function calculate(){
    try{
        outputscreen.value=eval(outputscreen.value);
    }
    catch(err){
        alert("INVALID")
    }
}
//function for clear number
function cl(){
    outputscreen.value= "";
}
//function for delete number
function del(){
    outputscreen.value=outputscreen.value.slice(0,-1)
}


