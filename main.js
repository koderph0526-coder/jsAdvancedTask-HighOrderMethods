// Fetching the elements needed from html
const cardCont = document.querySelector(".jsCardsCont");
const productInfoCard = document.querySelector(".jsCardBox");

// The products from Alvas webshop
const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

//Answering the tasks/missions in turn:
// 1: We are asked to use a method to find all the items in Alvas shop that cost less than 200
//Using .filter to "comb through" the products and their prices
const lessThan200 = products.filter((item) => item.price < 200);
//little bonus: Sorting them from lowest price to highest price:
const lowToHighPrice = [...lessThan200].sort((a, b) => a.price - b.price);
console.log(lessThan200);
console.log(
  "Sorting from lowest price to highest within the targetted group",
  lowToHighPrice,
);

//2: Fetching only the product names, to get a quick overview:
const allProducts = products.map((item) => item.name);
console.log(allProducts);

// 3: Fething only the names from the items under the category of Electronics
const targetCategory = "electronics";
const electrnsNames = products
  .filter((product) => product.category === targetCategory)
  .map((product) => product.name);

console.log(electrnsNames);

//4: Checking if one or more of the products price is over 1000

const isOver1000 = products.some((product) => product.price > 1000);
console.log(isOver1000);
//Atempted using .include() here, but it returned false? Would love to have a closer look at this in a lesson as google searches so far did not manage to explain why.

//5: Calculate the total sum of all the items in products.
const sumTotal = products.reduce((sum, item) => {
  return sum + item.price;
}, 0);
console.log(sumTotal);

//
//This code is purely for myself to train more on coding and design

//Starting with the products under 200
const lowPriceNames = lowToHighPrice.map((item) => item.name).join(", ");

const mediumHeader = document.createTextNode("h2");
const miniHeader1 = document.createTextNode("h3");
const title = document.createTextNode("p");
const price = document.createTextNode("p");
const divCard = document.createElement("div");
divCard.classList.add("jsCardBox");
mediumHeader.textContent = "Organizing and managing assitance";
miniHeader1.textContent =
  "Sorting from lowest price to highest within the targetted group";
title.textContent = lowToHighPrice.map((item) => item.name).join(", ");
divCard.append(title);
cardCont.appendChild(divCard);
