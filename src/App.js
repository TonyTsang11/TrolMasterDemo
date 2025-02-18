import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Calendar from "./pages/calendar/Calendar";
import Environment from "./pages/environment/Environment";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import "./styles/global.scss";

function App() {
  // Define the main layout of the system
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  // Changing Pages
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/calendar",
          element: <Calendar />,
        },
        {
          path: "/environment",
          element: <Environment />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
