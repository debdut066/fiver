import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";
import { comparePassword, generateToken, generateHashPassword } from "../utils/helper.js";

export const register = async (req, res, next) => {
  try {
    const hashPassword = generateHashPassword(req.body.password);
    const newUser = new User({
      ...req.body,
      password: hashPassword,
    });
    await newUser.save();
    res.status(201).send("User has been created.");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return next(createError(404, "User not found"));
    } else {
      const isValidPassword = comparePassword(
        req.body.password,
        user.password
      )
      if (!isValidPassword) {
        return next(createError(400, "wrong password"));
      } else {
        const token = generateToken(user)

        const { password, ...info } = user._doc;
        res
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
