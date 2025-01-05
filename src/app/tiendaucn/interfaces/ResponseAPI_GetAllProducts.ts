import { Product } from "./Product";

export interface ResponseAPIGetAllProducts {
    totalItems: number;
    pageSize:   number;
    pageNumber: number;
    totalPages: number;


    products:   Product[];
}
