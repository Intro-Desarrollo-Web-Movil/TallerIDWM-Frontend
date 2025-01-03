import { Product } from "./Product";

export interface ResponseAPIGetAllProducts {
    totalItems: number;
    pageNumber: number;
    pageSize:   number;

    products:   Product[];
}
