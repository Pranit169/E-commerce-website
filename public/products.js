const products = [
  {
    name: "Shoes",
    price: 5.0,
    image:
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "MEN's T-SHIRT",
    price: 6.34,
    image:
      "https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "JEANS",
    price: 9.0,
    image:
      "https://media.istockphoto.com/photos/folded-blue-jeans-on-a-white-background-modern-casual-clothing-flat-picture-id1281304280",
  },
  {
    name: "WATCH",
    price: 9.1,
    image:
      "https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "SMART PHONE",
    price: 20.0,
    image:
      "https://images.pexels.com/photos/6858618/pexels-photo-6858618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "TELEVISION",
    price: 18.0,
    image:
      "https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "HOODIES",
    price: 6.7,
    image:
      "https://images.pexels.com/photos/4295985/pexels-photo-4295985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "DINNER SET",
    price: 10.0,
    image:
      "https://media.istockphoto.com/photos/vintage-plates-with-silver-teaspoons-picture-id184363070",
  },
  {
    name: "BLANKETS",
    price: 9.9,
    image:
      "https://images.pexels.com/photos/6463348/pexels-photo-6463348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "LAPTOP",
    price: 99.0,
    image:
      "https://images.pexels.com/photos/2659939/pexels-photo-2659939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "MICROWAVE",
    price: 30.0,
    image:
      "https://media.istockphoto.com/photos/modern-kitchen-microwave-oven-picture-id1144960519",
  },
  {
    name: "COFFEE MAKER",
    price: 29.7,
    image:
      "https://media.istockphoto.com/photos/black-coffee-maker-with-green-led-lights-picture-id177395430",
  },
  {
    name: "BED",
    price: 100.0,
    image:
      "https://images.pexels.com/photos/6606354/pexels-photo-6606354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "AIR CONDITIONER",
    price: 78.0,
    image:
      "https://media.istockphoto.com/photos/woman-turning-on-air-conditioner-picture-id1325708905",
  },
  {
    name: "BOOK",
    price: 9.0,
    image:
      "https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "BAG",
    price: 36.5,
    image:
      "https://images.pexels.com/photos/4339598/pexels-photo-4339598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "SAREES",
    price: 25.6,
    image:
      "https://images.pexels.com/photos/5816934/pexels-photo-5816934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "WASHING MACHINE",
    price: 56.0,
    image:
      "https://images.pexels.com/photos/5816934/pexels-photo-5816934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const productContainer = document.getElementById("product-container");

products.forEach((product) => {
  const productHTML = `
    <div class="items">
                <div class="img">
                    <img src="${product.image}" alt="" />
                </div>
                <div class="name">${product.name}</div>
                <div class="price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" data-name="${
                  product.name
                }" data-price="${product.price}">Add to Cart</button>
            </div>
        `;
  productContainer.innerHTML += productHTML;
});
