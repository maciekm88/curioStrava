import React from 'react';

const auth_link = "https://www.strava.com/oauth/token"

function getActivities (res) {
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    fetch(activities_link)
        .then((res) => console.log(res.json()))
}

function reAuthorize(){
    fetch(auth_link, {
        method: 'post',
        headers: {

            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({

            client_id: '74820',
            client_secret: 'aa90f8bede45989f7229e964ca147e6bbaa76f4e',
            refresh_token: '32d3509503958f6fc781b5ec6ae171ef1435d938',
            grant_type: 'refresh_token'
        })
    }).then(res => res.json())
        .then(res => getActivities(res))
}
reAuthorize()


const Summary = ({ user, returnTokens }) => {
    return (
        <div className="summary_page">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            {/*console.log("Hi, {returnTokens.athlete.firstname}!");*/}
            {/*console.log("{user.data.all_ride_totals.distance}");*/}
        </div>
    );
};

export default Summary;
