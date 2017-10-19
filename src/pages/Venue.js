import React from "react"
import FullWidthImage from '../components/FullWidthImage'
import GoogleMap from '../components/GoogleMap'

const VenueContainer = () => {
    return (
        <div className='page page__venue'>
            <FullWidthImage imageClass="venue-image"/>
            <div className="centered-content">
                <h2>The Venue :</h2>
                <br/>
                <p>
                    <a href="https://www.rathsallagh.com/" target="_blank">
                        Rathsallagh Housе, Dunlavin, Co.Wicklow, W91 XK68
                    </a>
                </p>
                <p>Rathsallagh House is approximately 50-60km (50mins) from Dublin.</p>
            </div>
            <GoogleMap mapLocation="weddingVenue"/>
            <div className="centered-content">
                <h2>How to get there</h2>


                <h3>From Dublin/The West ( Dublin Airport ) ( driving time 1 hour )</h3>
                <p>Take the M50 south bound ( for Naas, Kildare ) .</p>
                <p>There is an automatic cash free toll bridge on the M50. Some car hire firms do include this
                toll in the rental agreement, check at the airport desk for details. If its not covered you will
                need to pay the toll at any petrol station after using it or online.</p>
                <p>Come off the M50 for Naas, Kildare, the South - N7 South Exit the N7 at junction 11 for the
                M9 southbound.</p>
                <p>The Road Signs will direct you towards Waterford / Carlow / Kilkenny.
                Exit at Junction 3.</p>
                <p>Take a left coming off the ramp at roundabout for the R747 Baltinglass.
                At the next T junction take a left onto the R448 for Crookstown.
                Pass Crookstown service station and take the next right for Dunlavin.
                3 km for Rathsallagh House and Rathsallagh Golf Club sign posted as you approach.</p>
                <br/>


                <h3>From South Dublin ( Dunlaoghaire) ( driving time 1 hour )</h3>
                <p>Take the R113 to the M50 and exit for Tallaght taking the N81 ( South ) to Blessington.
                Go straight through Blessington on the Baltinglass road and follow this road for about Six
                miles to Hollywood Cross and take a right to Dunlavin.</p>
                <p>Toughers Petrol Station, and signs for Wicklow Gap on the left.</p>
                <p>Into Dunlavin village, past the Court House in the centre of the street, and make a right
                turn out of the village for Rathsallagh.</p>
                <p>Entrance to Rathsallagh is 3 miles from village on left.</p>
            </div>
        </div>
    )
}

export default VenueContainer
