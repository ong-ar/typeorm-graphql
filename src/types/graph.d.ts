export const typeDefs = ["type User {\n  id: Int!\n  email: String\n  verifiedEmail: Boolean!\n  firstName: String!\n  lastName: String!\n  age: Int\n  password: String\n  phoneNumber: String\n  verifiedPhonenNumber: Boolean!\n  profilePhoto: String\n  createdAt: String!\n  updatedAt: String\n}\n\ntype GetUserResponse {\n  user: [User]\n  ok: Boolean!\n  error: String\n}\n\ntype Query {\n  GetUser(id: [Int]!): GetUserResponse!\n}\n"];
/* tslint:disable */

export interface Query {
  GetUser: GetUserResponse;
}

export interface GetUserQueryArgs {
  id: Array<number>;
}

export interface GetUserResponse {
  user: Array<User> | null;
  ok: boolean;
  error: string | null;
}

export interface User {
  id: number;
  email: string | null;
  verifiedEmail: boolean;
  firstName: string;
  lastName: string;
  age: number | null;
  password: string | null;
  phoneNumber: string | null;
  verifiedPhonenNumber: boolean;
  profilePhoto: string | null;
  createdAt: string;
  updatedAt: string | null;
}
