console.log("Machine Added");

function getvalueFromInput (id){
    const getId = document.getElementById(id);
    const getValue = getId.value;
    console.log(id, getValue);
    return getValue;
}



function getBlance (){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}

function setbalance ( value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;

}

function ShowOnly(id){
    
    const addMoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");

    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
    
}