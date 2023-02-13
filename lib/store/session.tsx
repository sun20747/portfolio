import { createSlice } from "@reduxjs/toolkit";

// const serializedState = localStorage.getItem('path__________');
// console.log(serializedState);
// localStorage?.getItem('path__________')
// ? JSON.parse(localStorage.getItem('path__________') || '{}')
// : {}
export const sessionSlice = createSlice({
    name: "session",
    initialState: {
        menu: 0
    },
    reducers: {
        setMenu: (state, action) => {
            let store = localStorage.getItem("path__________");
            if (!store) {
                state.menu = action.payload + 1;
                localStorage.setItem('path__________', `${state.menu}`);
            } else {
                if (action.payload > 1) {
                    state.menu = action.payload;
                    localStorage.setItem('path__________', `${state.menu}`);
                } else {
                    state.menu = Number(store);
                    localStorage.setItem('path__________', `${state.menu}`);
                }
                if (action.payload) {
                    state.menu = action.payload;
                    localStorage.setItem('path__________', `${state.menu}`);
                }
            }
        }
    },
});

export const { setMenu } = sessionSlice.actions;
export default sessionSlice.reducer;
