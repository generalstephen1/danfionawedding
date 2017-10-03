import React from "react";
import FullWidthImage from '../components/FullWidthImage';
import ConnectedCountdown from '../containers/Countdown';
import GoogleMap from '../components/GoogleMap';


const Home = () => {

    return (
        <div>
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
                filterClass="img-filter__green-tint"/>


            <div className="centered-content">
                <div className="centered-text">
                    <h2>Directions from the Church to the Venue</h2>
                </div>

            </div>
            <div className="google-map__container">
                <iframe
                    className="google-map__iframe"
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d76700.39432586227!2d-6.6995258000000035!3d53.076297400000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x48679b41aa0c2705%3A0xb2e2c378b588cd35!2sSt+Joseph&#39;s+Church%2C+Valleymount%2C+Co.+Wicklow!3m2!1d53.1070814!2d-6.5248783999999995!4m5!1s0x486787e049d7ee37%3A0xc9906f925f6abd8f!2sRathsallagh+House+Hotel+%26+Golf+Club%2C+Rathsallagh+Demesne%2C+Dunlavin%2C+Co.+Wicklow!3m2!1d53.028256!2d-6.7276451999999995!5e0!3m2!1sen!2sie!4v1507018407074"
                    width="600"
                    height="450"
                    frameborder="0"
                    allowfullscreen
                    style={{"border":0}}>
                </iframe>
            </div>
        </div>
    )
}

export default Home
