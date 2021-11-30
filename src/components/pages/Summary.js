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

            client_id: 'yourid',
            client_secret: 'yoursecret',
            refresh_token: 'yourrefreshtoken,
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
