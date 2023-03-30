import {createAsyncThunk, isRejectedWithValue} from "@reduxjs/toolkit"
import axios from "axios"

export const getProducts = createAsyncThunk("products/getProducts",async()=>{
    try {
        const res= await axios.get("https://fakestoreapi.com/products")
        return res.data
    } catch (error) {
        return isRejectedWithValue(error.message)
    }
})