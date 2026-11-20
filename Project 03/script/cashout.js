document.getElementById('cashout-btn').addEventListener('click',function(){
    const cashoutNumber =getvalueFromInput ('cashout-number');
    if(cashoutNumber.length !=11){
        alert("Invalid Agent Number! ");
        return;
    }


    const cashoutAmount = getvalueFromInput ("cashout-amount");


    
    const balance = getBlance()

    const NewBalance = balance - Number(cashoutAmount);
    if (NewBalance<0){
        alert("Invalid Amount!");
        return;
    }

    const pin = document.getElementById("cashout-pin");
    const pinNumber = pin.value;
    if(pinNumber==='1234'){
        alert("Cashout Successful!");
        setbalance(NewBalance);
    }
    else{
        alert("Invalid Pin!\nPlease Try Again.");
        return;
    }
    
})

// // step-1: get the agent numbr and validation 

// document.getElementById('cashout-btn').addEventListener('click', function () {
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//      if(cashoutNumber.length !=11){
//         alert("Invalid Agent Number! ");
//         return;
//     }

//     //step-02: get the amonunt
//     const cashout = document.getElementById("cashout-amount");
//     const cashoutAmount = cashout.value;
//     console.log(cashoutAmount);
   

//     //step: 03 get the current balance 
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     //step: 04 calculate New balance
//     const NewBalance = Number(balance) - Number(cashoutAmount);
//     if (NewBalance<0){
//         alert("Invalid Amount!");
//         return;
//     }
    

//     //step 05: get the pin and verify

//     const pin = document.getElementById("cashout-pin");
//     const pinNumber = pin.value;
//     if(pinNumber==='1234'){
//         alert("Cashout Successful!");
//         console.log("New Balance: "+NewBalance);
//         balanceElement.innerText=NewBalance;
//     }
//     else{
//         alert("Invalid Pin!\nPlease Try Again.");
//         return;

//     }


// })

