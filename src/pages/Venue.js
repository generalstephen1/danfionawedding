import React from "react"
import FullWidthImage from '../components/FullWidthImage'

const VenueContainer = () => {
    return (
        <div>
            <FullWidthImage imageClass="venue-image"/>
            <div className="centered-content">
                <p>I shall tell you how to get there, what to do nearby etc</p>
            </div>
        </div>
    )
}

export default VenueContainer
