import React, {useEffect, useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet';
import axios from 'axios'
import polyline from '@mapbox/polyline'

const Map = () => {

    interface Activity {
        activityPositions: any;
        activityName: string;
    }

    const [activities, setActivities] = useState<Activity[]>([]);

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
            console.log(stravaActivityResponse.data[0].map.summary_polyline);
            // console.log(polyline.decode(stravaActivityResponse.data[0].map.summary_polyline));

            const polylines = [];
            for (let i = 0; i < stravaActivityResponse.data.length; i += 1) {
                const activity_polyline = stravaActivityResponse.data[i].map.summary_polyline;
                const activity_name = stravaActivityResponse.data[i].name;
                polylines.push({activityPositions: polyline.decode(activity_polyline), activityName: activity_name});
            }
            console.log(polylines);

            setActivities(polylines);
            //
            // setActivities(stravaActivityResponse.data[0].name);
            }
            fetchData();
        }, []);



    return (
       <div className="map">
            <MapContainer center={[52.232222, 21.008333]} zoom={6} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {activities.map((activity, i) => (
                    <Polyline key = {i} positions={activity.activityPositions}>
                    </Polyline>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;