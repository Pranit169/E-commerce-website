const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const port = 8000;

const db = new sqlite3.Database("shopping_cart.db");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS cart (id INTEGER PRIMARY KEY, name TEXT, price REAL)"
  );
});

app.use(express.json());

app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/public" });
});

// Corrected the route for adding items to the cart
app.route("/api/cart/add").post((req, res) => {
  const { name, price } = req.body;
  db.run(
    "INSERT INTO cart (name, price) VALUES (?,?)",
    [name, price],
    (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({ message: "Item added to the cart." });
    }
  );
});

// Corrected the route for getting cart items
app.route("/api/cart/get").get((req, res) => {
  db.all("SELECT * FROM cart", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json(rows);
  });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
