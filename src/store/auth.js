import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = { isloggedin: false };

const Loginslice = createSlice({
    name: 'loggedin',
    initialState: initialLoginState,
    reducers: {
        login(state) {
            state.isloggedin = true;
        },

        logout(state) {
            state.isloggedin = false
        }
    }

})
export const LoginActions = Loginslice.actions;

export default Loginslice.reducer;