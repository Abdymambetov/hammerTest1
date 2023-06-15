import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { getOneUserAction, getUsersAction } from "../actions/UsersAction";


const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        isOpen: false,
        load: false,
        page: false,
        oneUser: {}
    },
    reducers: {
        setPage: (state) => {
            state.page = true //!state.page
        },
        setIsOpen: (state) => {
            state.isOpen = !state.isOpen
        }
    },
    extraReducers: builder => {
        builder
        .addCase(getUsersAction.fulfilled, (state, action) => {
            state.users = action.payload
            state.load = false
        })
        .addCase(getUsersAction.pending, (state) => {
            state.load = true
        })
        .addCase(getOneUserAction.pending, (state) => {
            state.load = true
        })
        .addCase(getOneUserAction.fulfilled, (state, action) => {
            state.oneUser = action.payload
            state.load = false
        })

    }
})
export const {setPage, setIsOpen} = usersSlice.actions
export default usersSlice.reducer