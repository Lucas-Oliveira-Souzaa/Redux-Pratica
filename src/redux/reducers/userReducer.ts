import {createSlice} from '@reduxjs/toolkit';

 const slice = createSlice ({
    name: 'user',
    initialState: {
        name: 'Lucas Oliveira Souza',
        age: 29
    },
    reducers: {
        setName:(state,  action) => {
            state.name = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        }
    }
});

export const {setName, setAge} = slice.actions
export default slice.reducer;
