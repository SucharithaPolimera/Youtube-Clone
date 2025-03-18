import React from 'react';
import "./Navbar.css";
import menuIcon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import uploadIcon from "../../assets/upload.png";
import moreIcon from "../../assets/more.png";
import notificationIcon from "../../assets/notification.png";
import profileIcon from "../../assets/jack.png";
import { Link } from 'react-router-dom';

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className = "menu-icon" src={menuIcon} alt="Menu Icon" onClick={() => setSidebar((prev)=> prev===false ?  true : false)}/>
            <Link to="/"><img className= "logo" src={logo} alt="Youtube logo"/></Link>
        </div>
        <div className='nav-middle flex-div'>
            <div className="search-box flex-div">
                <input type="text" placeholder='Search'/>
                <img src={searchIcon} alt = "Search icon"/>
            </div>
        </div>
        <div className='nav-right flex-div'>
            <img src={uploadIcon} alt="Upload icon"/>
            <img src={moreIcon} alt="More icon"/>
            <img src={notificationIcon} alt="Notification icon"/>
            <img className="user-icon" src={profileIcon} alt="Profile icon"/>
        </div>
    </nav>
  )
}

export default Navbar