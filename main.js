function calculateTip(){
    //select element
    var billAmount = document.getElementById ("amount").value;
    var quality = document.getElementById ("the_quality").value;
    var peopleNum = document.getElementById ("number").value;
   


 
  
    //checking if  input is empty or not!
    if (billAmount === "" || peopleNum === "" ){
        alert("please fill input first");
        return;

    };
    

    var result = ( billAmount*quality)/peopleNum;
    result = Math.round(total*100)/100;
    return result;

    document.getElementById ("results").style.display ="block";
    document.getElementById ("result").innerHTML = total;

}



document.getElementById ("results").style.display ="none";

document.getElementById ("calcbtn").onclick = function(){
    calculateTip();
}

