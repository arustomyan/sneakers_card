import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../model/product';

interface IStore {
  product: IProduct;
  isLoading: boolean;
}

const initialState: IStore = {
  product: {
    product: '',
    characteristics: [],
    brandLogo: '',
    variation: {},
  },
  isLoading: true,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.isLoading = true;
      state.product = action.payload;
      state.isLoading = false;
    },
  },
});

export const { addProduct } = productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer;
