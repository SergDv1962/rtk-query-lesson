import { createBrowserRouter, Link, Outlet, redirect } from "react-router-dom";
import { UsersList } from "../modules/users/users-list";
import { Counters } from "../modules/counters/counters";
import { UserInfo } from "../modules/users/user-info";
import { store } from "./store";
import { usersApi } from "../modules/users/api";

const loadStore = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(store), 0);
  });

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="container p-5 flex flex-col gap-5">
        <header className="py-5 flex gap-4">
          <Link to="users">Users</Link>
          <Link to="counters">Counters</Link>
        </header>
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        loader: () => redirect("/users"),
      },
      {
        path: "users",
        element: <UsersList />,
        loader: () => {
          //1 вар. якщо даних нема вони запросятся у сервера, а як що вони є то оберуться з кеша
          // loadStore().then(async () => {
          //   const result = await store
          //     .dispatch(usersApi.endpoints.getUsers.initiate())
          //     .unwrap();
          //   result
          // });
          loadStore().then(async () => {
            console.log('fetch')
            //звернення до даних за межами нашого стора,визиваємо  prefetch даних до того як відрендерется компонент
            store.dispatch(usersApi.util.prefetch('getUsers', undefined, {}))
          });
          return null;
        },
      },
      {
        path: "users/:id",
        element: <UserInfo />,
        loader: ({ params }) => {
          loadStore().then( () => {
            store.dispatch(usersApi.util.prefetch('getUser', params.id ?? '', {}))
          });
          return null;
        },
      },
      {
        path: "counters",
        element: <Counters />,
      },
    ],
  },
]);
