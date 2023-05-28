import User from "../Schema/user.Schema.js";

export const createUser = async (Body, password) => {
    const userData = new User({
        ...Body,
        password: password,
      });
      const newUser = await userData.save();
    try{
        return newUser;
    }catch(error){
        return false;
    }
}


export const existUser = async (username) => {
    const user = await User.findOne({ username: username });
    return user;
}