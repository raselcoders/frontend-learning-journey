const price = 3500;

if (price>=5000){
    const discount = price*10/100;
    const payamount = price - discount;
     console.log(`Congratulations! You have 10% discount.\nYou have to pay ${payamount} Taka only.`);
}
else if(price>=3000){
    const discount=price*5/100;
    const payamount=price - discount;
    console.log(`Congratulations! You have 5% discount.\nYou have to pay ${payamount} Taka only.`);
}
else{
    console.log("You have to pay "+ price+" Taka only.");
}