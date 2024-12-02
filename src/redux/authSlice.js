import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    // Stores user
    user: null,
    // Stores registered users
    registeredUsers: [],
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        // Add new user
        register(state, action) {
            state.registeredUsers.push(action.payload);
        },


        login(state, action) {
            const { email, password } = action.payload;
            const user = state.registeredUsers.find(
                (u) => u.email === email && u.password === password
            );
            if (user) {
                state.isAuthenticated = true;
                state.user = { email: user.email, name: user.name };
            }
        },


        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { register,login, logout } = authSlice.actions;
export default authSlice.reducer;
