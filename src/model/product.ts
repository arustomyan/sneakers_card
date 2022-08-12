export interface Characteristic {
  characteristic: string;
  value: string;
}

export interface Variant {
  name: string;
  colorName: string;
  article: number;
  color: string;
  img: string;
  price: number;
}

export interface Variation {
  [index: string]: Variant;
}

export interface IProduct {
  product: string;
  characteristics: Characteristic[];
  brandLogo: string;
  variation: Variation;
}
