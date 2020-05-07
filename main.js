// select element
let amount = document.getElementById ("amount");
let quality = document.getElementById ("the_quality");
let peopleNumber = document.getElementById ("number");
let inputs =document.querySelectorAll ("input");


//hide the results section
document.getElementById("results").style.display = "none";


class container{
    //calculateBill  
    calculateBill(amount,quality,peopleNumber){
        var calculat = (this.amount / this.peopleNumber) * this.quality;
        calculat = Math.round(calculat * 100) / 100;
        return calculat();
        
        
    }
    
    // add result to html
    billResult(){
        document.getElementById("result").innerHTML = this.calculat;
        
    }
    resetForm(){
        amount.value ="";
        peopleNumber.value = "";
    }

    
    
        
    
    chickInput(){
        document.getElementById('calcbtn').addEventListener('click',()=>{
            
            if(amount.value === "" || peopleNumber.value === ""){
                alert('please fill input first!!');
                peopleNumber.focus();
                amount.focus();
            
            }
            else if(amount.value <= 0 ||peopleNumber.value <= 0){
                alert("Invaild value");
                this.resetForm();
            }
            else{
                this.billResult();
                document.getElementById("results").style.display = "block";
                this.resetForm();

            }
        })
    };


};
const calce = new container();
calce.chickInput();

document.querySelector('form').addEventListener('click',(e)=>{
    e.preventDefault();
})
