import { Item } from "./Item";

export interface ResponseAPIGetCart {
  cartId: number;
  userId: number;
  items:  Item[];
  total:  number;
}

