
const getUserProfile = async (req, res, next) => {
  try {
    const user = {
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export { getUserProfile };