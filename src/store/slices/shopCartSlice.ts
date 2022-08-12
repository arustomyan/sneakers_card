import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Variant } from '../../model/product';

interface ICart {
  [index: string | number]: {
    product: Variant;
    count: number;
  };
}

interface IShopCart {
  cart: ICart;
  count: number;
  isLoading: boolean;
}

const initialState: IShopCart = {
  cart: {},
  count: 1,
  isLoading: true,
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
