import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import "./styles.css";
import App from "./App";
import Home from "./Home";
import Projects from "./Projects";

const router = createBrowserRouter([
    {
        exact: true,
        path: "/",
        element: <Home />,
    },
    {
        exact: true,
        path: "/app",
        element: <App />,
    },
    {
        exact: true,
        path: "/projects",
        element: <Projects />,
    },
    {
        exact: true,
        path: "*",
        element: <Navigate to="/" />,
    },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
