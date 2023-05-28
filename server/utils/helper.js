import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const comparePassword = (Inputpassword, UserPassword) => {
    const isValid = bcrypt.compareSync(
        Inputpassword,
        UserPassword
    )
    try {
        return isValid;
    } catch (error) {
        return false;
    }
}

export const generateToken = (user) => {
    const token = jwt.sign(
        {
          id: user._id,
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