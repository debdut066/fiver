import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can delete only you account"));
  } else {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).send("user deleted.");
  }
};

export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    next(createError(404, "user not found"));
  }
  return res.status(200).send(user);
};
