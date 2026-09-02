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
//Using .map to filter through all the information in the object-array(array-object? help..), as this doesn't alter the original but creates a new array based on the information I ask for.
const allProducts = products.map((item) => item.name);
console.log(allProducts);

// 3: Fething only the names from the items under the category of Electronics
//Using both .filter and then .map, as I want it to only 'map' the catergory of electronics.
const targetCategory = "electronics";
const electrnsNames = products
  .filter((product) => product.category === targetCategory)
  .map((product) => product.name);

console.log(electrnsNames);

//4: Checking if one or more of the products price is over 1000
//Using .some as this method could scan throught the array and find that there was indeed an item priced above 1000. While .include doesn't seems to be able to read the different objects storen in the array.
const isOver1000 = products.some((product) => product.price > 1000);
console.log(isOver1000);
//Atempted using .include() here, but it returned false? Would love to have a closer look at this in a lesson as google searches so far did not manage to explain why.

//5: Calculate the total sum of all the items in products.
//Using .reduce with sum as a parameter, making it run a function throught the array to combine the price of all the items, and I'm telling it to start at index 0 to control it's starting poiint.
const sumTotal = products.reduce((sum, item) => {
  return sum + item.price;
}, 0);
console.log(sumTotal);
//Note: I'm storing everything in variables to make certain I avoid mutating the orinial array, however it may not have been nessacary in part 2 of the task according to what I understand about the .map method

//
//This code is purely for myself to train more on coding with js and design

//Starting with the products under 200
// const lowPriceNames = lowToHighPrice.map((item) => item.name).join(", ");

const mediumHeader = document.createTextNode("h2");
const contextTxt = document.createTextNode("p");
const titleN = document.createTextNode("p");
titleN.classList.add("boldTitle");
const titleP = document.createTextNode("p");
const titleC = document.createTextNode("p");
const category = document.createTextNode("p");
const price = document.createTextNode("p");
mediumHeader.textContent = "Organizing and managing assitance";
cardCont.append(mediumHeader);
// for (let item of lowToHighPrice) {
// Creating the card for each catergory of organizing/managing improvement, adding class too
const divCard = document.createElement("article");
divCard.classList.add("jsCardBox");

//A little header for the items in their orgnized category in the cards
const miniHeader1 = document.createTextNode("h3");
miniHeader1.textContent =
  "The items under 200, possibly a good list for Impulse buy items";

//Styling div for all the title - names
const divNames = document.createElement("div");
divNames.classList.add("divNames");

//The Title for each product
titleN.textContent = `Name ${lessThan200.name}`;

//The price:
titleP.textContent = `Price: ${lessThan200.price}`;
//
div;
divNames.append(titleN);
divCard.append(miniHeader1);
cardCont.append(divCard);
// Not working the way I want yet. Idea: Make separate divs with styling to separate name, price and category, append into said divs and then append those divs into the cardDiv?
// }
// miniHeader1.textContent =
//   "Sorting from lowest price to highest within the targetted group";
// Pushing the divcard To it's container in html
