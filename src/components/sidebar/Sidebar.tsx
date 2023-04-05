import "./sidebar.css";
import * as React from 'react';
import DashboardIcon from "@mui/icons-material/Dashboard";
import CurrencyBitcoinOutlineIcon from '@mui/icons-material/CurrencyBitcoin';
import InsightsOutlineIcon from '@mui/icons-material/Insights';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useContext } from "react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
  
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">CoinX</span>
        </Link>
      </div>
      <hr />
      {/* Main section */}
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
            <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <Link to="/coin" style={{ textDecoration: "none" }}>
            <li>
              <CurrencyBitcoinOutlineIcon className="icon" />
              <span>Coin</span>
            </li>
          </Link>
          <Link to="/Marketchart" style={{ textDecoration: "none" }}>
            <li>
              <InsightsOutlineIcon className="icon" />
              <span>Chart</span>
            </li>
          </Link>
          
          {/* Useful section */}
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>

          {/* Service section */}
          <p className="title">SERVICE</p>
          
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <MonetizationOnOutlinedIcon className="icon" />
            <span>Earnings</span>
          </li>
          <li>
            <AccountBalanceWalletOutlinedIcon  className="icon" />
            <span>Wallet</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>

          {/* User section */}
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span >Logout</span>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
