const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const usersRouter = require("./routes/userRouter");

console.log("JWT_SECRET:", process.env.JWT_SECRET);

const { errorHandler } = require("./MIDDLEWARE/errorMiddleware");
require("./utils/connectDB")();
const app = express();
const PORT = process.env.PORT || 5001;

// Add a root route to handle the root URL
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.use(express.json());

app.use(cookieParser());
// Routes
app.use("/api/v1/users", usersRouter);

//error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Fixed the missing space after 'port'
});
