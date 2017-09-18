import React from "react"
import FullWidthImage from '../components/FullWidthImage'


const Home = () => {

    const customImageStyles = {
        backgroundPositionY: '40%',
        height: '40em',
    };

    return (
        <div>
            <FullWidthImage
                customStyles={customImageStyles}
                imageClass="couple-image"
                filterClass="img-filter__dots"/>

            <div className="centered-content">
                <p>Home</p>
            </div>
        </div>
    )
}

export default Home
