import mongoose from "mongoose";
import User from "../Schema/user.Schema.js";
import { generateHashPassword, generateToken, existUser } from "../utils/helper.js";

export const createUser = async (Body) => {
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
