import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./slices/UsersSlice";

export const store = configureStore({
    reducer: {
        person: UsersReducer
    }
})