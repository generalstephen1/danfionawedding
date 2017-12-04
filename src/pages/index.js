import React from "react";
import FullWidthImage from '../components/FullWidthImage';
import ConnectedCountdown from '../containers/Countdown';
import GoogleMap from '../components/GoogleMap';
import GiphyEmbed from '../components/GiphyEmbed';


const Home = () => {

    return (
        <div className='page page__home'>
            <FullWidthImage
                imageClass="family-image-2"
                filterClass="img-filter__none"
                customStyles={{'backgroundPositionY': '20%'}}/>
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
                <GiphyEmbed />
            </div>
        </div>
    )
}

export default Home
