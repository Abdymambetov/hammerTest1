import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersAction = createAsyncThunk(
    'getUsersAction',
    async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(data)
        return data
    }
)

export const getOneUserAction = createAsyncThunk(
    'getOneUserAction',
    async (id) => {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log(data)
        return data
    }
)