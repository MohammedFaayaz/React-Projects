import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import React from "react"

const store = configureStore({
    reducer: {
        auth: authSlice,

    }
})

export default store