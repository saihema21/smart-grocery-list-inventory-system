const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

console.log("SERVER STARTED");

// ROOT
app.get("/", (req, res) => {
  res.send("Server Working 🚀");
});

// ITEMS (FORCE WORKING)
app.get("/items", (req, res) => {
  res.json([
    { id: 1, name: "Milk", quantity: 2, category: "Dairy", price: 60 },
    { id: 2, name: "Rice", quantity: 5, category: "Grains", price: 120 },
    { id: 3, name: "Good Day", quantity: 3, category: "Biscuits", price: 20 }
  ]);
});

app.listen(5000, () => {
  console.log("RUNNING ON 5000");
});