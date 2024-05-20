const express = require("express");

const usersRouter = require("./routes/userRouter");

const app = express();
const PORT = process.env.PORT || 5000;

// Add a root route to handle the root URL
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// Routes
app.use("/api/v1/users", usersRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Fixed the missing space after 'port'
});
