document.getElementById('add-money-btn').addEventListener('click',function(){
    const Addmoneybank = getvalueFromInput('add-money-bank');
    if(Addmoneybank === 'Select Bank'){
        alert("Please Select a Bank")
        return;
    }

    const accno = getvalueFromInput('add-money-number');
    if(accno.length != 11){
        alert("Invalid Account Number!")
        return;
    }

    const addmoney = getvalueFromInput('add-money-amount');
    const NewBlance = Number(addmoney) + getBlance();
    
    const pin = getvalueFromInput('add-money-pin');
    if(pin === '1234'){
        alert(`Add Money successful 
            form ${Addmoneybank} at ${new Date()}`)
        setbalance(NewBlance);

    }
    else{
        alert("Invalid Pin");
        return;
    }

})