import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span> ReactSocial</span>
        </Link>

        <HomeIcon />
        <DarkModeOutlinedIcon />
        <AppsIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="search..." />
        </div>
      </div>

      <div className="right">
        <PersonOutlineOutlinedIcon />
        <MailOutlineOutlinedIcon />
        <NotificationsNoneOutlinedIcon />

        <div className="user">
          <img src="https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="user"/>
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
