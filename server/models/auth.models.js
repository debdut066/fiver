import mongoose from "mongoose";
import User from "../Schema/user.Schema.js";
import { generateHashPassword, generateToken, existUser, comparePassword } from "../utils/helper.js";

export const registerUser = async (Body) => {
    const isUser = await existUser(Body.email, Body.username);
    if(isUser.length === 0){
        const hashPassword = await generateHashPassword(Body.password);
        
        const userData = new User({
            _id : new mongoose.Types.ObjectId(),
            username : Body.username,
            email : Body.email,
            password : hashPassword
        });

        const newUser = await userData.save();
        const token = generateToken(newUser)

        try{
            return {
                msg : "Registration is successfull",
                user : userData,
                token : token
            };
        }catch(error){
            console.log(error);
            return "Something went wrong"
        }
    }else{
        return "Username or Email already has been taken";
    }
}

export const loginUser = async (Body) => {
    const isUser = await existUser(Body.username, Body.username);

    if(isUser.length === 0){
        return "Incorrect username or email"
    }else{
        const isPasswordValid = await comparePassword(Body.password, isUser[0].password);
        if(!isPasswordValid){
            return "Password is incorrect"
        }else{
            const token = await generateToken(isUser[0]);
            return {
                msg : "LogIn is successfull",
                user : isUser[0],
                token : token
            }
        }
    }
}
