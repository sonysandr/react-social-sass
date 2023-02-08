import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Leftbar from "./components/leftbar/Leftbar";

import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import ProtectedRoutes from "./pages/protectedroutes/ProtectedRoutes";

function App() {

const currentUser = false;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div sx={{ display: "flex" }}>
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
      <Route element={<ProtectedRoutes ifUser={currentUser}/>}>
          <Route path="/" element={<Layout/>}>
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
