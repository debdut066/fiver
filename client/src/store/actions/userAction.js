import { createAsyncThunk } from "@reduxjs/toolkit";
import { routeConfig } from "../../config/routes";
import newRequest from "../../utils/newRequest";

export const userLogin = createAsyncThunk(
    routeConfig.login,
    async ({ username, password }, thunkAPI) => {
        try {
            const user = await newRequest.post("/auth/login",{
                username,
                password
            });
            return user.data;            
        } catch (error) {
            if(error.response && error.response.data){
                return thunkAPI.rejectWithValue(error.response.data)
            }else{
                return thunkAPI.rejectWithValue(error.message)
            }
        }
    }
)

export const userRegister = createAsyncThunk(
    routeConfig.register,
    async ({ username , password, email}, thunkAPI) => {
        try {
            const user = await newRequest.post('/auth/register', {
                username : username,
                email : email,
                password : password
            })
            return user.data;
        } catch (error) {
            if(error.response && error.response.data.message){
                return thunkAPI.rejectWithValue(error.response.data)
            }else{
                return thunkAPI.rejectWithValue(error.message)
            }
        }
    }
)