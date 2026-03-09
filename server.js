const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRouter = require("./routes/user.route");
const bookRouter = require("./routes/book.route");   // ADD THIS

dotenv.config();

// connect database
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/authuser", userRouter);
app.use("/api/book", bookRouter);   // ADD THIS

// test route
app.get("/", (req, res) => {
  res.send("SpendWise API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});