import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import AppProvider from "./contexts/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <AppProvider>
        <RouterProvider router={router} />
    </AppProvider>
);