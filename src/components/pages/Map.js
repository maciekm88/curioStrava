import React, {useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios'

const Map = () => {

    const client_id = "yourid";
    const client_secret = "yoursecret";
    const refresh_token = "yourrefreshtoken";
    const activities_link = `https://www.strava.com/api/v3/athlete/activities`;

    useEffect(() => {
        async function fetchData() {
            const stravaActivityResponse = await axios.get(`${activities_link}?access_token=youraccestoken`);
            console.log(stravaActivityResponse);
        }
            fetchData();
        }, []);







    return (
        <h2>testing</h2>

    );
};

export default Map;