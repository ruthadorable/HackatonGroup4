import React from 'react'
import {NavLink} from 'react-router-dom'
function SideNav() {
    return (
        <div className="wrapper">

        <div className="sidebar">
            <div className="logo">
                <img src="" alt="logo"/>
                <h3>Teksa travel</h3>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                    <i class="bi bi-house-door"></i>
                    <NavLink exact to="/" activeClassName="navActive">
                    
                        <span>Home</span>
                    </NavLink>
                    </li>
                   
                    <li>
                    <i class="bi bi-search"></i>
                    
                    <NavLink exact to="/explore" activeClassName="navActive">
                        
                        <span>Explore</span>
                    </NavLink>
                    </li>
                    <li>
                    <i class="bi bi-heart"></i>
                    
                    <NavLink exact to="/trips" activeClassName="navActive">
                
                        <span>Trips</span>
                    </NavLink>
                    </li>
                    <li>
                    <i class="bi bi-person"></i>
                    
                    <NavLink exact to="/profile" activeClassName="navActive">
                        <i className="fas fa-profile"></i>
                        <span>Profile</span>
                    </NavLink>
                    </li>
                    <li>
                    <i class="bi bi-power"></i>
                    <NavLink exact to="/Logout" activeClassName="navActive">
                        
                        <span>Logout</span>
                    </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default SideNav;
