document.getElementById('btn-click').addEventListener('click',function(){
    const inputNumber = document.getElementById('input-number');
    const contactNumber = inputNumber.value;
    console.log("Hello");


    //step 02
    const inputPin = document.getElementById('input pin');
    const pinCheck = inputPin.value;
   

    //step 03
    if(contactNumber == '01626958474' && pinCheck =='1234'){
        alert("Login Successful");
        // window.location.replace("/Home.html")
        window.location.assign("/Home.html")
    }
    else{
        alert("Login Failed");
        return
    }
})