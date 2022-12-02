import React from 'react'
import "./sidebar.scss"
// material icon
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SystemSecurityUpdateIcon from '@mui/icons-material/SystemSecurityUpdate';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"

const SideBar = () => {
    
  return (
    <div className='sidebar'>
        <div className='top'> 
        <Link to="/" className='link' >
        <span className='logo'>Admin Biodun</span> 
        </Link>
         </div>
        <hr className='hr' />
        
        <div className='center'>
            <ul>
                <p className='title'>Main</p>
                <li><DashboardIcon  className='icon' /><span>Dashboard</span></li>
                <li><PersonIcon className='icon' /> <Link to="/users" className='link' > <span>User</span></Link></li>
                <li><Inventory2Icon className='icon' /><span>Product</span></li>

                <p className='title'>Useful</p>

                <li><BookmarkBorderIcon className='icon' /><span>Orders</span></li>
                <li><LocalShippingIcon className='icon' /><span>Delivery</span></li>
                <li><QueryStatsIcon className='icon' /><span>Stats</span></li>

                <p className='title'>Links</p>

                <li><NotificationsIcon className='icon' /><span>Notification</span></li>
                <li><SystemSecurityUpdateIcon className='icon' /><span>System Health</span></li>  
                <li><PsychologyAltIcon className='icon' /><span>Logs</span></li>

                <p className='title'>User</p>

                <li><SettingsIcon className='icon' /><span>Settings</span></li>
                <li><AccountCircleIcon className='icon' /><span>Profile</span></li>
                <li><LogoutIcon className='icon' /><span>Log Out</span></li>
            </ul>
        </div>
        <div className='bottom'>
        <div className='color-option'></div>
        <div className='color-option'></div>
        </div>

    </div>
  )
}

export default SideBar