import React, {useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios'

const Map = () => {

    const client_id = "74820";
    const client_secret = "aa90f8bede45989f7229e964ca147e6bbaa76f4e";
    const refresh_token = "32d3509503958f6fc781b5ec6ae171ef1435d938";
    const activities_link = `https://www.strava.com/api/v3/athlete/activities`;

    useEffect(() => {
        async function fetchData() {
            const stravaActivityResponse = await axios.get(`${activities_link}?access_token=fecf5cd7ea7eaa08e6103de73d0592e1d8122b2d`);
            console.log(stravaActivityResponse);
        }
            fetchData();
        }, []);







    return (
        <h2>testing</h2>

    );
};

export default Map;