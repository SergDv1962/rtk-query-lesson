import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { fetchUsers } from "../modules/users/model/fetch-users.ts";
import { RouterProvider } from "react-router-dom";
import { store } from "./store.ts";
import { router } from "./router.tsx";

// store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
