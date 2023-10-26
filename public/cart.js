// const { response } = require("express");

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cart = [];

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.getAttribute("data-name");
      const productPrice = parseFloat(button.getAttribute("data-price"));
      console.log(`Adding ${productName} to cart with price $${productPrice}`);
      cart.push({ name: productName, price: productPrice });

      // Update the cart display
      console.log("Updating cart display...");
      displayCart();
      updateTotalBill();

      // Store cart data in localStorage
      console.log("Storing cart data in localStorage...");
      localStorage.setItem("cartData", JSON.stringify(cart));

      fetch("http://localhost:8000/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: productName, price: productPrice }),
      }).catch((error) => {
        console.error("Error:", error);
      });
    });

    function retrieveCartItems() {
      fetch("http://localhost:8000/api/cart/get")
        .then((response) => response.json())
        .then((cartItems) => {
          console.log(cartItems);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    retrieveCartItems();
  });

  const checkoutButton = document.getElementById("checkout-button");
  checkoutButton.addEventListener("click", () => {
    console.log("Checkout button clicked.");
    window.open("cart.html", "_blank");
  });

  function displayCart() {
    console.log("Displaying the cart...");
  }

  function updateTotalBill() {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    console.log(`Updating total bill to $${total.toFixed(2)}`);
    // Update your total bill element here
  }
});
