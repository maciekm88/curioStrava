import React, {useEffect, useState} from 'react';
import axios from "axios";

const Distance = () => {


    const clientId = "74820";
    const clientSecret = "aa90f8bede45989f7229e964ca147e6bbaa76f4e";
    const refreshToken = "32d3509503958f6fc781b5ec6ae171ef1435d938";
    const auth_link = "https://www.strava.com/oauth/token";
    const activities_link = `https://www.strava.com/api/v3/athlete/activities`;

    useEffect(() => {
        async function fetchData() {
            const stravaAuthResponse = await axios.all([
                axios.post(`${auth_link}?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
            ]);

            const stravaActivityResponse = await axios.get(`${activities_link}?access_token=${stravaAuthResponse[0].data.access_token}`);
            console.log(stravaActivityResponse.data[0].name);
        }
        }

    )


    return (
        <div className="distance_page">
            Lorem ipsum dolor sit amet, qui suscipit ullam, voluptatum!
        </div>
    );
};

export default Distance;