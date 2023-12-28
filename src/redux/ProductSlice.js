import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
    SUCCESS:"success",
    ERROR:"error",
    LOADING: "loading"
})


const productSlice = createSlice({
    name:"product",
    initialState:{
        data : [],
        status: STATUS.SUCCESS
    },

    reducers:{
        setProducts(state, action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        },
        
    }
})

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;