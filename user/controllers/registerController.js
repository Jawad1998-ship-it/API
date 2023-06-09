import User from "../models/userModel.js";
import generateToken from '../../middlewares/loginChecker/loginAuth.js';

const registerUser = async (req, res, next) => {
  try {

    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if(userExists)
    {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if(user)
    {
      generateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      })
    }
    else
    {
      res.status(400);
      throw new Error("Invalid user data");
    }
    

  } catch (error) {
    next(error);
  }
};

export { registerUser };