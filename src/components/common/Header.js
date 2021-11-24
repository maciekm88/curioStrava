import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="menu">
                <div className="menu_content">
                    <div className="logo">
                        <h1 id="title">your statistical curiosities from Strava!</h1>
                    </div>
                    <div className="nav">
                        <div className="menu_nav">
                            <NavLink to="/Summary">Summary</NavLink>
                            <NavLink to="/Distance">Distance</NavLink>
                            <NavLink to="/Calories">Calories</NavLink>
                            <NavLink to="/Speed">Speed</NavLink>
                            <NavLink to="/Elevation">Elevation</NavLink>
                            <NavLink to="/Map">Map</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;