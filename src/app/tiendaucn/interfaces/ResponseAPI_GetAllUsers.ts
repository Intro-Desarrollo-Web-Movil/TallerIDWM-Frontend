import { User } from './User'; // Adjust the import path as necessary

export interface ResponseAPIGetAllUsers {
  totalItems: number;
  pageSize:   number;
  pageNumber: number;
  totalPages: number;

  users:      User[];
}

