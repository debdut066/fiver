import createError from "../utils/createError.js";
import { comparePassword, generateToken } from "../utils/helper.js";
import * as AuthModel from "../models/auth.models.js"

/* Register User */
export const register = async (req, res, next) => {
  try {
    if(!req.body.username.trim() || !req.body.email.trim() || !req.body.password.trim()){
      throw new Error("Some of the parameter are missing")
    }else{
      const user = await AuthModel.createUser(req.body);
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
    const user = await AuthModel.existUser(req.body.username);

    if (!user) {
      return next(createError(404, "User not found"));
    } else {
      
      const isValidPassword = comparePassword(
        req.body.password,
        user.password
      )
      
      if (!isValidPassword) {
        next(createError(400, "wrong password"));
      } else {
        const token = generateToken(user)

        const { password, ...info } = user._doc;
        return res
          .cookie("accessToken", token, {
            httpOnly: true,
          })
          .status(200)
          .send(info);
      }
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
