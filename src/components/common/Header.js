import React from 'react';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStrava } from "@fortawesome/free-brands-svg-icons/faStrava";
import { faRoute } from "@fortawesome/free-solid-svg-icons/faRoute";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons/faPizzaSlice";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons/faTachometerAlt";
import { faMountain } from "@fortawesome/free-solid-svg-icons/faMountain";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons/faGlobeEurope";
import "../sass/App.scss";
import "animate.css";

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
                            <NavLink to="/Summary"><FontAwesomeIcon icon={faStrava} /> Summary</NavLink>
                            <NavLink to="/Distance"><FontAwesomeIcon icon={faRoute} /> Distance</NavLink>
                            <NavLink to="/Calories"><FontAwesomeIcon icon={faPizzaSlice} /> Calories</NavLink>
                            <NavLink to="/Speed"><FontAwesomeIcon icon={faTachometerAlt} /> Speed</NavLink>
                            <NavLink to="/Elevation"><FontAwesomeIcon icon={faMountain} /> Elevation</NavLink>
                            <NavLink to="/Map"><FontAwesomeIcon icon={faGlobeEurope} /> Map</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;