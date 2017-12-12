import React from "react"
import wedpicsLogo from "../img/wedpics_logo_main.png";

const MediaContainer = () => {
    return (
        <div className='page page__media'>
            <div
                className="centered-content"
                style={{textAlign: "center"}}>
                <h1>#danandfionasbigday</h1>
                <h2>
                    We would love for you to share photos of our big day!
                </h2>
                <img
                    className="page__media__centered-image centered-image"
                    src={wedpicsLogo}
                    alt="wedpics logo"/>
                <h2>
                    We have set up a WedPics Album to share all of our wedding moments
                </h2>
                <p>1: Visit <a href="https://wedpics.com/home">wedpics.com</a></p>
                <p>2: Select <span className="highlight-text">"Join an EXISTING Wedding"</span></p>
                <p>3: Input <span className="highlight-text">"DanFiona"</span> as wedding ID</p>
                <p>4: Sign Up and start adding memories!</p>
            </div>
        </div>
    )
}

export default MediaContainer
