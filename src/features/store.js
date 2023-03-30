import {configureStore} from "@reduxjs/toolkit"
import { productReducer } from "./products/products.slice"
import {usersReducer} from "../features/users/users.slice"

export default configureStore({
    reducer:{
        products:productReducer,
        users:usersReducer
    }
})