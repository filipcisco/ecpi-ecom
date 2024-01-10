export interface Basket {
    id: number;
    userId: number;
    date: string;
    products: BasketProduct[];
    __v: number;
  }
  
  export interface BasketProduct {
    productId: number;
    quantity: number;
  }
