import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Books from "./pages/Books/Books";
import Contact from "./pages/Contact/Contact";
import Games from "./pages/Games/Games";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/books",
          element: <Books />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/games",
          element: <Games />,
        },
      ],
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
