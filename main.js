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
//I'm going with filter
const lessThan200 = products.filter((item) => item.price < 200);
//little bonus: Sorting them from lowest price to highest price:
const lowToHighPrice = [...lessThan200].sort((a, b) => a.price - b.price);
console.log(lessThan200);
console.log(
  "Sorting from lowest price to highest within the targetted group",
  lowToHighPrice,
);

//2: Fetch only the product names, to get a quick overview:
const allProducts = products.map((item) => item.name);
console.log(allProducts);

// 3: Fething only the names from the items under the category of Electronics
const targetCategory = "electronics";
const electronicNames = products
  .filter((product) => product.category === targetCategory)
  .map((product) => product.name);

console.log(electronicNames);
// Nope need a nap... Fix it later.
