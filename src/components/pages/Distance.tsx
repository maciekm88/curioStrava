import React, {useEffect, useState} from 'react';
import axios from "axios";

const Distance = () => {

    interface Distance {
        distanceResponse: number;
        totalRideDistance: number;
        totalRunDistance: number;
        totalDistance: number;
        aroundTheWorld: number;
        toTheMoon: number;
    }

    const [distance, setDistance] = useState<Distance[]>([]);

    const clientId = "74820";
    const clientSecret = "aa90f8bede45989f7229e964ca147e6bbaa76f4e";
    const refreshToken = "32d3509503958f6fc781b5ec6ae171ef1435d938";
    const auth_link = "https://www.strava.com/oauth/token";
    const athlete_link = `https://www.strava.com/api/v3/athlete`;
    const athleteStats_link = `https://www.strava.com/api/v3/athletes/{USER_ID}/stats`;

    useEffect(() => {
        async function fetchData() {
            const stravaAuthResponse = await axios.all([
                axios.post(`${auth_link}?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
            ]);
            // pobieranie unikalnego ID użytkownika
            const athleteResponse = await axios.get(`${athlete_link}?access_token=${stravaAuthResponse[0].data.access_token}`);
            console.log(athleteResponse.data.id);
            const athleteId = athleteResponse.data.id

            const athleteStats_link = `https://www.strava.com/api/v3/athletes/${athleteId}/stats`;
            const athleteStatsResponse = await axios.get(`${athleteStats_link}?access_token=${stravaAuthResponse[0].data.access_token}`);
            console.log(athleteStatsResponse);
            console.log(athleteStatsResponse.data);
            console.log(athleteStatsResponse.data.all_ride_totals.distance);
            console.log(athleteStatsResponse.data.all_run_totals.distance);
            const totalRideDistance = (athleteStatsResponse.data.all_ride_totals.distance * 0.001);
            console.log(totalRideDistance);
            const totalRunDistance = (athleteStatsResponse.data.all_run_totals.distance * 0.001);
            console.log(totalRunDistance);
            const totalDistance = (totalRideDistance + totalRunDistance);
            console.log(totalDistance);
            const equatorLength = 40178.017;
            const aroundTheWorld = (equatorLength - totalDistance);
            console.log("You still need " + aroundTheWorld + " kilometers to go around the world");
            const moonDistance = 384400;
            const toTheMoon = (moonDistance - totalDistance);
            console.log("You are still " + toTheMoon + " kilometers far from the moon :(")

            //tablica składa się kolejno z:
            // całkowity dystans na rowerze,
            // całkowity przebiegnięty dystans,
            // suma tych dystansóœ,
            // ile km pozostało do okrążenia ziemi
            // w jakiej odleglosci od ksiezyca jestesmy

            const athleteDistance = [totalRideDistance, totalRunDistance, totalDistance, aroundTheWorld, toTheMoon];

            console.log(athleteDistance);

            setDistance(athleteDistance);

        }

        fetchData();
    }, []);


    return (
        <div className="distance_page">
            Lorem ipsum dolor sit amet, qui suscipit ullam, voluptatum!
        </div>
    );
};

export default Distance;