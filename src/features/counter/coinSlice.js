import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mycoin: 10,
}


export const coinSlice = createSlice({
    name : "CoinSlice",
    initialState,
    reducers : {
        add: (state, action) => {
            state.mycoin +=  action.payload
        },
        addOne : (state) => {
            state.mycoin += 1
        }
        ,
        Dec : (state) =>{
            state.mycoin = state.mycoin - 1;
        }
    }
})


export const { add, addOne, Dec } = coinSlice.actions

export default coinSlice.reducer;