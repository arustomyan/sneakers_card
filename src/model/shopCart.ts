import { Variant } from './product';

export interface ICart {
  [index: string | number]: {
    product: Variant;
    count: number;
  };
}
