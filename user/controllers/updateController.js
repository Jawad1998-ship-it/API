import User from '../models/userModel.js';


const updateUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || req.name;
      user.email = req.body.email || req.email;

      if(req.body.password)
      {
        user.password = req.body.password;
      }
      const updatedUser = await user.save()
      res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    next(error);
  }
};

export { updateUserProfile };
