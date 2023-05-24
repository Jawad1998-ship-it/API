import User from '../models/userModel.js';
import generateToken from '../../middlewares/loginChecker/loginAuth.js';

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
          generateToken(res, user._id);
          res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
          });
        } else {
          res.status(401);
          throw new Error("Invalid email or password");
        }
    } catch (error) {
        next(error);
    }
}


export { loginUser };