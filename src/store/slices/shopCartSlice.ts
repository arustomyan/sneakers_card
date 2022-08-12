import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../model/product';

interface ICart {
  product: IProduct;
  count: number;
}

interface IShopCart {
  cart: ICart[];
  count: number;
  isLoading: boolean;
}

const initialState: IShopCart = {
  cart: [],
  count: 1,
  isLoading: true,
};

export const shopCartSlice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    // addToCart: (state, action: PayloadAction<IProduct>) => {},
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

export const { increaseCount, decreaseCount } = shopCartSlice.actions;

const shopCartReducer = shopCartSlice.reducer;
export default shopCartReducer;
