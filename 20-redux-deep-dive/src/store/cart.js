import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCartState = { items: 0, showCart: false }

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        increment(state) {
            state.items++;
        },
        decrement(state) {
            if (state.items > 0) {
                state.items--;
            }
        },
        showCart(state) {
            state.showCart = !state.showCart;
        }
    }
})

export const cartActions = cartSlice.actions;

const store = configureStore({
    reducer: { cart: cartSlice.reducer }
})

export default store;