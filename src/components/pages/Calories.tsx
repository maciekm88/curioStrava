import React, {useEffect, useState} from 'react';
import axios from "axios";

const Calories = () => {

    interface Cals {
        activityKilojoules: number;
        activityName: string;
    }

    const [calories, setCalories] = useState<Cals[]>([]);

    const clientId = "74820";
    const clientSecret = "aa90f8bede45989f7229e964ca147e6bbaa76f4e";
    const refreshToken = "32d3509503958f6fc781b5ec6ae171ef1435d938";
    const auth_link = "https://www.strava.com/oauth/token";
    const athlete_link = `https://www.strava.com/api/v3/athlete`;
    const activities_link = `https://www.strava.com/api/v3/athlete/activities`;

    useEffect(() => {
        async function fetchData() {
            const stravaAuthResponse = await axios.all([
                axios.post(`${auth_link}?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
            ]);

            const athleteResponse = await axios.get(`${athlete_link}?access_token=${stravaAuthResponse[0].data.access_token}`);
            console.log(athleteResponse.data.id);
            const athleteId = athleteResponse.data.id

            const stravaActivityResponse = await axios.get(`${activities_link}?access_token=${stravaAuthResponse[0].data.access_token}`);
            console.log(stravaActivityResponse.data);
            console.log(stravaActivityResponse.data[0].kilojoules);

            const kilojoules = [];
            for (let i = 0; i < stravaActivityResponse.data.length; i += 1) {
                const activity_kilojoules = stravaActivityResponse.data[i].kilojoules;
                kilojoules.push([activity_kilojoules]);
            }
            console.log(kilojoules);
            // for (let i = kilojoules.length; i >= 0; i--) {
            //     if (typeof kilojoules[i] === undefined) {
            //         kilojoules.splice(i, 1);
            //     }
            // }
            kilojoules.splice(kilojoules.findIndex(i => typeof i === "undefined"));

            console.log(kilojoules);


                //https://bicycles.stackexchange.com/questions/32026/what-is-energy-output-in-strava-application
                // in a straight energy conversion there are about 4.185 joules per calorie,
                // or 4185 joules per kilocalorie (="Calorie").
                // However, the human body is not 100% efficient in converting food Calories into energy.
                // In fact, gross metabolic efficiency (GME) in humans is generally in the range of 19-24%.
                // That is, only about 19-24% of the food Calories we consume are converted into energy we can use
                // -- the rest is converted into heat.
                // Strava is assuming a value for GME of 21.4%,
                // about the mid-point of that observed range of gross efficiency.
                //
            // const grossMetabolicEfficiency = 0.214
            //
            // const kilojoulesToKcal = Math.round(kilojoules / 4.185);
            // console.log(kilojoulesToKcal);




            // const polylines = [];
            // for (let i = 0; i < stravaActivityResponse.data.length; i += 1) {
            //     const activity_polyline = stravaActivityResponse.data[i].map.summary_polyline;
            //     const activity_name = stravaActivityResponse.data[i].name;
            //     polylines.push({activityPositions: polyline.decode(activity_polyline), activityName: activity_name});
            // }
            // console.log(polylines);

            // setActivities(polylines);
            //
            // setActivities(stravaActivityResponse.data[0].name);
        }
        fetchData();
    }, []);



    return (
        <div className="calories_page">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aspernatur dolorum eaque illum magni obcaecati sapiente ullam. Ab autem nam? liquid architecto consequatur consequuntur corporis cum debitis deleniti dolorum earum id maxime molestias, mollitia officia ratione recusandae rem vero, voluptate. Dolor ex odit quibusdam voluptate. Assumenda, consectetur deleniti dolorum est facere ipsa minima nostrum odit ratione, sapiente sit unde voluptates. Ad commodi dicta dolorum eum impedit, in necessitatibus nesciunt, qui suscipit ullam, voluptatum!
        </div>
    );
};

export default Calories;