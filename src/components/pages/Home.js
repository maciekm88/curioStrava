import React from 'react';
import curiostatsLogo from "../../images/curiostats256.png";
const redirectUrl = "http://localhost:3000/Summary";
const scope = "read";



const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=74820&response_type=code&redirect_uri=${redirectUrl}xchange_token&approval_prompt=force&scope=read`;
};

const Home = () => {
    return (
        <>
            <div className="homepage">
                <h1><img src={curiostatsLogo} alt="runner logo turkub flaticon" /></h1>
                <h2>curiostats</h2>
                <h3>your statistical curiosities</h3>
                <h3>from Strava</h3>
                <button className="strava-auth" onClick={handleLogin}>Connect with Strava</button>
            </div>
        </>
    );
};

export default Home;
