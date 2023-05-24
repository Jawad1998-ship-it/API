
const logoutUser = async (req, res, next) => {
  try {
     res.cookie("jwt", "", {
       httpOnly: true,
       expires: new Date(0),
     });
    res.status(200).json({ message: "User logged out" });
  } catch (error) {
    next(error);
  }
};

export { logoutUser };