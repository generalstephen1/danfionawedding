import React from "react";
import FullWidthImage from '../components/FullWidthImage';
import ConnectedCountdown from '../containers/Countdown';
import GoogleMap from '../components/GoogleMap';


const Home = () => {

    return (
        <div>
            <FullWidthImage
                imageClass="flowers-image"
                filterClass="img-filter__none"
                customStyles={{'backgroundPositionY': '80%'}}/>
            <div className="centered-content">
                <ConnectedCountdown />

                <div className="centered-text">
                    <p><strong>Ceremony: </strong><a href="http://www.valleymountparish.ie/" target="_blank"> St Joseph's Church, Valleymount</a></p>
                    <p><strong>Venue :  </strong><a href="https://www.rathsallagh.com/" target="_blank"> Rathsallagh Housе, Dunlavin</a></p>
                </div>
                <br/>
                <div className="centered-text">
                    <h2>Itinerary</h2>
                    <p>Wedding Ceremony will take place at 2pm.</p>
                    <p>Please try and get there 15mins prior to the ceremony.</p>
                    <p>Afterwards we will continue to Rathsallagh House to CELEBRATE!!!</p>
                </div>
            </div>

            <FullWidthImage
                imageClass="church-image"
                filterClass="img-filter__none"/>
            <div className="centered-content">
                <div className="centered-text">
                    <h2>Directions from the Church to the Venue</h2>
                </div>

            </div>

            <GoogleMap mapLocation="weddingCeremonyToReception"/>

        </div>
    )
}

export default Home
