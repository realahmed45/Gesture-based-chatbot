const User = require("../models/User");
const bcrypt = require("../models/User");
User;
//----------Registration----

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !emai || !password) {
      res.status(400);
      throw new Error("plz all fields are required");
    }
    //check email is taken

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    //create user

    const newUser = new User({
      username,
      password,
      email,
    });

    //Add date the trial will end

    newUser.trialExpires = new Date(
      new Date().getTime() + newUser.trialPeriod * 24 * 60 * 60 * 1000
    );

    //save the user

    await newUser.save();
    res.json({
      status: true,
      message: "registration was successfull",
      user: {
        username,
        password: hashedpassword,
        email,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
// =--login---//
//logout//
//profile//
//check user Auth status//

module.exports = {
  register,
};
