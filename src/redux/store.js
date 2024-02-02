/* eslint-disable no-undef */

import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducers';

// Varsayılan state'inizi tanımlayın
const defaultState = {
    cartProducts: []
};

const store = configureStore({
    reducer: cartReducer,
    preloadedState: defaultState
});

export default store;
