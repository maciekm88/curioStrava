import React, {useEffect, useState} from 'react';
import axios from "axios";

const Calories = () => {

    interface Cals {
        totalKilojoulesToKcal: number;
        pizzaSlices: number;
        hamburgers: number;
        beers: number;
        colas: number;
    }

    const [calories, setCalories] = useState<number[]>([]);

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

            const kJs = kilojoules.flat();
            console.log(kJs);

            const kJoules = kJs.filter(function(el) {
                return el !== undefined;
            })
            console.log(kJoules);

            const sumOfKilojoules = Math.round(kJoules.reduce(function(total, item) {
                return total + item;
            }));
            console.log(sumOfKilojoules);

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

            const grossMetabolicEfficiency = 0.214

            const kilojoulesConversion = Math.round(sumOfKilojoules / 4.185);
            console.log(kilojoulesConversion);

            const totalKilojoulesToKcal = Math.round(kilojoulesConversion / grossMetabolicEfficiency);
            console.log(totalKilojoulesToKcal);

            const pizzaSliceKcal = 300;
            const hamburgerKcal = 294;
            const beer500Ml = 215;
            const colaCan = 123;

            const pizzaSlices = Math.round(totalKilojoulesToKcal / pizzaSliceKcal);
            console.log(pizzaSlices)
            const hamburgers = Math.round(totalKilojoulesToKcal / hamburgerKcal);
            console.log(hamburgers)
            const beers = Math.round(totalKilojoulesToKcal / beer500Ml);
            console.log(beers)
            const colas = Math.round(totalKilojoulesToKcal / colaCan);
            console.log(colas)

            const caloriesStats = [totalKilojoulesToKcal, pizzaSlices, hamburgers, beers, colas]
            console.log(caloriesStats);

            setCalories(caloriesStats);

        }
        fetchData();
    }, []);



    return (
        <div className="calories_page">
            <h2>Are you a foodie?</h2>
            <h3>You burnt {calories[0]} calories! Wow! Keep exercising!</h3>
            <h3>You burnt {calories[1]} pizza slices! Yummy!</h3>
            <h3>You burnt {calories[2]} hamburgers!</h3>
            <h3>You burnt {calories[3]} 500 ml bottles of beer!</h3>
            <h3>You burnt {calories[4]} 330 ml cola cans!</h3>
        </div>
    );
};

export default Calories;