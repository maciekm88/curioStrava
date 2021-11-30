import React, {useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios'

const Map = () => {

    const clientId = "yourid";
    const clientSecret = "yoursecret";
    const refreshToken = "yourrefreshtoken";
    const auth_link = "https://www.strava.com/oauth/token";
    const activities_link = `https://www.strava.com/api/v3/athlete/activities`;

    useEffect(() => {
        async function fetchData() {
            const stravaAuthResponse = await axios.all([
                axios.post(`${auth_link}?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
            ]);
            console.log(stravaAuthResponse);

            const stravaActivityResponse = await axios.get(`${activities_link}?access_token=${stravaAuthResponse[0].data.access_token}`);
            console.log(stravaActivityResponse.data[0]);
            }
            fetchData();
        }, []);







    return (
        <h2>testing</h2>
// <div className="map">
// <MapContainer center={[52.232222, 21.008333]} zoom={6} scrollWheelZoom={true}>
//     <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     <Marker position={[52.232222, 21.008333]}>
//         <Popup>
//             curiostats. <br /> your statistical curiosities from Strava.
//         </Popup>
//     </Marker>
// </MapContainer>
// </div>
    );
};

export default Map;