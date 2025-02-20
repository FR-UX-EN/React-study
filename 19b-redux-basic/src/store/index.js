import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
            // this works as an immutable way
            // internally copies all other properties
        },
        decrement(state) {
            state.counter--;
        },
        // if we need some data then we can put action
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});


// const store = createStore(counterReducer);
// configureStore allows merging multiple reducers
// need to pass an object
const store = configureStore({
    reducer: counterSlice.reducer
});

// will create action objects for us
// no identifier is needed!
export const counterActions = counterSlice.actions

export default store;


