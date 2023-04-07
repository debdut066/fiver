import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const register = async (req,res,next) => {
    try {
        const hashPassword = bcrypt.hashSync(req.body.password, 5);
        const newUser = new User({
            ...req.body,
            password : hashPassword
        })
        await newUser.save();
        res.status(201).send("User has been created.")
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export const login = async (req,res) => {
    try {
        const user = await User.findOne({ user : req.body.username });

        if(!user){
            res.status(404).send("User not found")
        }else{
            const isValidPassword = bcrypt.compareSync(req.body.password, user.password);
            if(!isValidPassword){
                return res.status(400).send("wrong password")
            }else{
                const token = jwt.sign({
                    id : user._id,
                    isSeller : user.isSeller,
                },process.env.JWT_KEY);

                const { password, ...info} = user._doc;
                res.cookie("accessToken",token,{
                    httpOnly : true
                })
                .status(200).send(info)
            }
        }
    } catch (error) {
        next(error)
    }
}

export const logout = () => {

}