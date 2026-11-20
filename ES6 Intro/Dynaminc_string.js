const first_name = "Ashraful";
const last_name ="Rasel";

const myName = `My full Name is: ${first_name} ${last_name}`;
console.log(myName);


let product = {
  name: "Laptop",
  price: 800,
  image: "laptop.jpg"
};

let productCard = `
  <div class="product">
    <img src="${product.image}" width="200">
    <h3>${product.name}</h3>
    <p>Price: $${product.price}</p>
    <button>Add to Cart</button>
  </div>
`;

document.body.innerHTML = productCard;
