import React, {useEffect, useState} from 'react';
import axios from "axios";
// declare var athleteResponse: any;




const Summary = () => {

    interface Athlete {
        //athleteResponse: any;
        athleteFirstname: string;
        athleteLastname: string;
        athleteProfilePicture: string;
    }

    const [athlete, setAthlete] = useState<Athlete[]>([]);

    const clientId = "74820";
    const clientSecret = "aa90f8bede45989f7229e964ca147e6bbaa76f4e";
    const refreshToken = "32d3509503958f6fc781b5ec6ae171ef1435d938";
    const auth_link = "https://www.strava.com/oauth/token";


    useEffect(() => {
        async function fetchData() {
            const stravaAuthResponse = await axios.all([
                axios.post(`${auth_link}?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
            ]);

            const athlete_link = `https://www.strava.com/api/v3/athlete`;

            const athleteResponse = await axios.get(`${athlete_link}?access_token=${stravaAuthResponse[0].data.access_token}`);
            console.log(athleteResponse);
            console.log(athleteResponse.data);
            const athleteFirstname = athleteResponse.data.firstname;
            console.log(athleteFirstname);
            const athleteLastname = athleteResponse.data.lastname;
            console.log(athleteLastname);
            const athleteProfilePicture = athleteResponse.data.profile;
            console.log(athleteProfilePicture);

            console.log(athleteResponse.data.firstname);
            console.log(athleteResponse.data.lastname);
            console.log(athleteResponse.data.profile);

            const athleteBio = [athleteFirstname, athleteLastname, athleteProfilePicture];

            console.log(athleteBio);

            setAthlete(athleteBio);

        }

        fetchData();
    }, []);

    return (
        <div className="summary_page">
            <h1>Hello {athlete[0]} {athlete[1]}!</h1>
            <h2><img src="{{athlete[2]}}" alt="profile avatar"/></h2>
            <h2>Are you curious about your sport stats?</h2>
            <h4>How many kilometers do you need to go around the world?</h4>
            <h4>or maybe you want to know </h4>
            <h4>how many fast foods did you burnt during your trainings?</h4>
            <h4>What about being faster than a hare?</h4>
            <h4>or climbing Mount Everest?</h4>
            <span>Background hoto by cottonbro from Pexels</span>

        </div>
    );
};

export default Summary;
