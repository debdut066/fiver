import bcrypt from "bcrypt"
import userSchema from "../Schema/user.Schema.js";
import jwt from "jsonwebtoken";

export const comparePassword = (Inputpassword, UserPassword) => {
    const isValid = bcrypt.compareSync(
        Inputpassword,
        UserPassword
    )
    try {
        return isValid;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const generateToken = (user) => {
    const token = jwt.sign(
        {
          id: user._id,
          username : user.username,
          email : user.email,
          isSeller: user.isSeller,
        },
        process.env.JWT_KEY
    );
    try {
        return token;
    } catch (error) {
        return false;
    }
}

export const generateHashPassword = (password) => {
    const newPassword = bcrypt.hashSync(password, 5);
    try {
        return newPassword;
    } catch (error) {
        return false;
    }
}

export const existUser = async (userName, email) => {
    try {
        const userExist = await userSchema.find({
            $or : [{ email : email}, { username : userName }]        
        });
        return userExist;
    } catch (error) {
        throw error.message
    }
}