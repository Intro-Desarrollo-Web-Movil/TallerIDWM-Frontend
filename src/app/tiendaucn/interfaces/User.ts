export interface User {
  id:        number;
  name:      string;
  email:     string;
  birthDate: Date;
  isActive:  boolean;
  role:      Role;
  gender:    Gender;
  rut:       string;
  token:     null;
}

export interface Gender {
  GenderId: number;
  Name: string;
}

export interface Role {
  RoleId: number;
  Name:  string;
}
