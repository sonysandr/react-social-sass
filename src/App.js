import React, { useContext } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import './style.scss'
import Leftbar from "./components/leftbar/Leftbar";

import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import ProtectedRoutes from "./pages/protectedroutes/ProtectedRoutes";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  // temp user auth
  const currentUser = true;

  const {darkMode} = useContext(DarkModeContext)

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
            <Leftbar />
            <div style={{flex: 6 }}>
              <Outlet  />
            </div>
            <Rightbar />
        </div>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes ifUser={currentUser} />}>
            <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
