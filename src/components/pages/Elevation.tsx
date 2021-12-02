import React, {useEffect, useState} from 'react';
import axios from "axios";

const Elevation = () => {


    interface athleteElevation {
        // athleteStatsResponse: any;
        // totalRideDistance: number;
        // totalRunDistance: number;
        // totalDistance: number;
        // aroundTheWorld: number;
        // toTheMoon: number;
    }

    const [elevation, setElevation] = useState<number[]>([]);

    const clientId = "74820";
    const clientSecret = "aa90f8bede45989f7229e964ca147e6bbaa76f4e";
    const refreshToken = "32d3509503958f6fc781b5ec6ae171ef1435d938";
    const auth_link = "https://www.strava.com/oauth/token";
    const athlete_link = `https://www.strava.com/api/v3/athlete`;
    // const athleteStats_link = `https://www.strava.com/api/v3/athletes/{USER_ID}/stats`;

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
            console.log(athleteStatsResponse.data.all_ride_totals.elevation_gain);
            console.log(athleteStatsResponse.data.all_run_totals.elevation_gain);
            const totalRideElevation = (athleteStatsResponse.data.all_ride_totals.elevation_gain);
            console.log(totalRideElevation);
            const totalRunElevation = (athleteStatsResponse.data.all_run_totals.elevation_gain);
            console.log(totalRunElevation);
            const totalElevationGain = (totalRideElevation + totalRunElevation);
            console.log(totalElevationGain);
            const mountEverest = 8848;
            const troposphereMax = 12000;
            const stratosphereMax = 50000;
            const mesosphereMax = 80000;
            const cosmos = 100000;
            const thermosphereMax = 700000;
            const exosphereMax = 10000000;
            const moon = 384400000;
            const passoDelloStelvio = 1808;
            const alpeDHuez = 1127;

            const stelvioClimbed = ((totalRideElevation / passoDelloStelvio).toFixed(1));
            console.log("Oh, I see you climbed Passo dello Stelvio about " + stelvioClimbed + " times! Keep riding!");

            const alpeClimbed = ((totalRideElevation / alpeDHuez).toFixed(1));
            console.log(alpeClimbed + " visits on Alpe d'Huez? Wow, you're great!");

            const everestClimbed = ((totalRunElevation / mountEverest).toFixed(2));
            console.log("You climbed Mount Everest for " + everestClimbed + " times on your feet. Impressive!")

            //tablica składa się kolejno z:
            // całkowite przewyzszenie
            // przewyzszenie na rowerze
            // przewyzszenie biegiem
            // ilosc podjazdow na Stelvio - tylko rower
            // ilosc podjazdow na Alpe - tylko rower
            // ilosc wejsc na Everest - tylko bieganie


            const elevationStats = [totalElevationGain, totalRideElevation, totalRunElevation, stelvioClimbed, alpeClimbed, everestClimbed];

            console.log(elevationStats);

            setElevation(elevationStats)

        }

        fetchData();
    }, []);



    return (
        <div className="elevation_page">
            <h2>Let's see how much do you like climbing!</h2>
            <h3>Your total gained elevation is {elevation[0]} meters! Good work!</h3>
            <h3>Total elevation includes {elevation[1]} meters of cycling and {elevation[2]} meters of running!</h3>
            <h3>Looks like you're a pro cyclist! {elevation[3]} Stelvio climbs or {elevation[4]} Alpe d'Huez visits!</h3>
            <h3>Oh, you're aslo a great runner! {elevation[5]} Mount Everest summits! Like a Sherpa!</h3>
            <h3>Totally {elevation[0]} meters! Bye bye Earth, you're in the thermosphere! :)</h3>
        </div>
    );
};

export default Elevation;