import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICart } from '../../model/shopCart';

interface IShopCart {
  cart: ICart;
  count: number;
}

const initialState: IShopCart = {
  cart: {},
  count: 1,
};

export const shopCartSlice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      state.cart = { ...state.cart, ...action.payload };
      state.count = 1;
    },
    // removeFromCart: (state, action: PayloadAction<IProduct>) => {},
    // clearCart: (state, action: PayloadAction<IProduct>) => {},
    increaseCount: (state) => {
      state.count += 1;
    },
    decreaseCount: (state) => {
      state.count -= 1;
    },
  },
});

export const { addToCart, increaseCount, decreaseCount } = shopCartSlice.actions;

const shopCartReducer = shopCartSlice.reducer;
export default shopCartReducer;
