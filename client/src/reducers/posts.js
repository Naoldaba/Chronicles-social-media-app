import {createSlice} from '@reduxjs/toolkit'

const reducer=createSlice({
    name: 'posts',
    initialState:[],
    reducers:{
        FETCH_ALL: (state, action) => action.payload,
        CREATE: (state, action) => [...state, action.payload],
        UPDATE: (state, action) => state.map((post) => post._id === action.payload._id ? action.payload : post ),
        DELETE: (state, action) => state.filter((post)=>post._id != action.payload),
        LIKEPOST: (state, action) => state.map((post)=> post._id == action.payload._id ? action.payload : post )
    }
})

export const {FETCH_ALL, CREATE, UPDATE, DELETE, LIKEPOST} = reducer.actions;
export default reducer.reducer;