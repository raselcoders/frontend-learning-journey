const handeladdproduct = () =>{

    // step 01: product and quentity catch. 
    const productElement =document.getElementById("product");

    const quentityElement = document.getElementById("quentity");


    // step 02: product and quentity value catch. 

    const ProductValue =productElement.value;
    const quentityValue =parseInt(quentityElement.value);

    // step: 03  value empty
    productElement.value = '';
    quentityElement.value = '';

    // step: 08 displayshow fuction call and value send; 
    displayshow(ProductValue,quentityValue);
    addproductTocart(ProductValue,quentityValue)


}

const getcart = ()=>{
    let cart = {};
    const cartjson = localStorage.getItem('cart');
    if(cartjson){
        cart = JSON.parse(cartjson)
    }

    return cart;
}
const addproductTocart = (product,quentity)=>{
    const cart = getcart();
    cart[product] = quentity;
    console.log('cart',cart);
    const cartjson = JSON.stringify(cart);
    localStorage.setItem('cart', cartjson)
}


// step: 04 display show function make. 
const displayshow = (product, quentity) =>{
    //step: 05  do li create 
    const li = document.createElement('li');
    // step: 06 set value in innertext.  
    li.innerText = `${product} : ${quentity}`

    //step: 07 get ul from html code
    const ul = document.getElementById("product-container");
    // do append li in ul variable
    ul.append(li);
}
