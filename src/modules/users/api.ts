import { baseApi } from "../../shared/api";
import { User, UserId } from "./users.slice";

export const usersApi = baseApi.injectEndpoints({
   endpoints: (create) => ({
      getUsers: create.query<User[], void>({
         query: () => '/users',
         providesTags: ['Users'],
      }),
      getUser: create.query<User, UserId>({
         query: (userId) => `/users/${userId}`,
         providesTags: ['Users'],
      }),
      deleteUser: create.mutation<void, UserId>({
         query: (userId) => ({ method: 'DELETE', url: `./users/${userId}`}),
         invalidatesTags: ['Users'],
      })
   }),
   overrideExisting: true, //потрібно завжди його використовувати(коли ти щось змінюєш то воно відразу відображається без перезагрузки сторінки)
})