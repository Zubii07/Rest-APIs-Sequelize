const express = require("express");
const cors = require("cors");
const app = express();

var corOptions = {
  origin: "http://localhost:8081",
};

// Middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
const router = require("./routes/productRouter");
app.use("/api/products", router);

// Testing APIs
app.get("/", (req, res) => {
  res.json({ message: "Welcome from APIs." });
});

// port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
