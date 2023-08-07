import createError from "../utils/createError.js";
import * as AuthModel from "../models/auth.models.js"

/* Register User */
export const register = async (req, res, next) => {
  try {
    if(!req.body.username.trim() || !req.body.email.trim() || !req.body.password.trim()){
      throw new Error("Some of the parameter are missing")
    }else{
      const user = await AuthModel.registerUser(req.body);
      return res.status(201).json(user);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/* Login User */
export const login = async (req, res, next) => {
  try {
    if(!req.body.username.trim() || !req.body.password.trim()){
      throw new Error("Credentials missing")
    }else{
      const user = await AuthModel.loginUser(req.body);
      return res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: "true",
    })
    .status(200)
    .send("User has been logged out");
};
