// select element
let amount = document.getElementById ("amount");
let quality = document.getElementById ("quality");
let peopleNumber = document.getElementById ("number");
let inputs =document.querySelector ("input");
let form = document.getElementById ("content");
let resetBtn = document.getElementById("reset");



class container{
    cont(amount,quality,peopleNumber){
		this.amount = amount;
		this.quality = quality;
		this.peopleNumber = peopleNumber;
		}

    //calculateBill  
    calculateBill(){
        let calculat = (this.amount / this.peopleNumber) * this.quality;
        calculat = Math.round(calculat * 100) / 100;
        return calculat;
        
        
        
    }
    
    
    resetForm(){
        amount.value = "";
        peopleNumber.value = "";

    }
        
    
    checkInput(){
        document.getElementById('calcbtn').addEventListener('click',()=>{
            
            if(amount.value === "" || peopleNumber.value === ""){
                alert('please fill input first!!');
                document.getElementById("results").style.display = "none";
            
            }
            else if(amount.value <= 0 ||peopleNumber.value <= 0){
                alert("Invaild value");
                this.resetForm();
                document.getElementById("results").style.display = "none";

            }
            else{
                this.calculateBill();
                document.getElementById("results").style.display = "block";
                

            }
        })
    };


};
//const calce = new container();
//calce.checkInput();

document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let calculator = new container(amount.value,peopleNumber.value,quality.value);
    calculator.checkInput();
    let showData = document.getElementById("results");
    let calc = "";
    calc += '<h3>TIP AMOUNT</h3>'+
            '<p>$ <span>' + calculator. calculateBill() +'</span></p>'+
            '<h5 id="each">each</h5>';
    showData.innerHTML = calc;

});

resetBtn.addEventListener("click" , function(e) {
	e.preventDefault();
    //reset data
    resetForm="";
    amount.value = "";
    peopleNumber.value = "";

    document.getElementById("results").style.display = "none";



});
