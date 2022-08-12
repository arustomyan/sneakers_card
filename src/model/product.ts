export interface Characteristic {
  characteristic: string;
  value: string;
}

export interface Variation {
  [index: string]: {
    colorName: string;
    article: number;
    color: string;
    img: string;
    price: number;
  };
}

export interface IProduct {
  product: string;
  characteristics: Characteristic[];
  brandLogo: string;
  variation: Variation;
}
