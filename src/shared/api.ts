// import {z} from "zod";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { User } from "../modules/users/users.slice";

const baseUrl = "http://localhost:3000";

// baseApi використовується для загальних запросів всього застосунку(тут у нас цього нема)
export const baseApi = createApi({
   baseQuery: fetchBaseQuery({ baseUrl }),
   tagTypes: ["Users"],
   endpoints: () => ({
   }),
}) 

// const UseDtoSchema = z.object({
//    id: z.string(),
//    name: z.string(),
//    description: z.string(),
// })

// export const api = {
//    getUsers: () => {
//       return fetch(`${baseUrl}/users`)
//          .then((response) => response.json())
//          .then(res => {
//             return UseDtoSchema.array().parse(res)
//          });
//    },

//    getUser: (userId: string) => {
//       return fetch(`${baseUrl}/users/${userId}`)
//          .then((response) => response.json())
//          .then(res => {
//             return UseDtoSchema.parse(res)
//          });
//    },

//    createUser: (user: User) => {
//       return fetch(`${baseUrl}/users`, {
//          method: 'POST',
//          headers: {
//             "Content-Type": "application/json",
//          },
//          body: JSON.stringify(user),
//       }).then((response) => response.json());
//    },

//    deleteUser: (userId: string) => {
//       return fetch(`${baseUrl}/users/${userId}`, {
//          method: "DELETE",
//       }).then((response) => response.json());
//    }
// }