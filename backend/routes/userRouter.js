const express = require("express");

const { register } = require("../contollers/usersContoller");
const usersRouter = express.Router();

usersRouter.post("/register", register);

module.exports = usersRouter;
