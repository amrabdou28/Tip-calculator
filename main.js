// select element
let amount = document.getElementById ("amount");
let quality = document.getElementById ("the_quality");
let peopleNumber = document.getElementById ("number");



//hide the results section
document.getElementById("results").style.display = "none";

class container{
    //clculateBill  
    calculateBill(amount,quality,peopleNumber){
        var calculat = (this.amount / this.peopleNumber) * this.quality;
        calculat = Math.round(calculat * 100) / 100;
    }
    // add result to html
    billResult(){
        document.getElementById("result").innerHTML = "calculateBill";
        
    }
    chickInput(){
        document.getElementById('calcbtn').addEventListener('click',()=>{
            
            if(amount.value === "" || peopleNumber.value === ""){
                alert('please fill input first!!')
            }
            else if(amount.value <= 0 ||peopleNumber.value <= 0){
                alert("Invaild value");
                peopleNumber.focus();
                amount.focus();
            }
            else{
                this.billResult();
                document.getElementById("results").style.display = "block";

            }
        })
    };


};
const calce = new container();
calce.chickInput();

document.querySelector('form').addEventListener('click',(e)=>{
    e.preventDefault();
})