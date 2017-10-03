import React from "react"
import FullWidthImage from '../components/FullWidthImage'


const ContactContainer = () => {

    return (
        <div>
            <FullWidthImage
                imageClass="couple-image"
                filterClass="img-filter__green-tint"/>

            <div className="centered-content">
                <h2>Contact & RSVP :</h2>
                <p>If you have any questions contact us at danandfionaswedding@gmail.com </p>
                <p>Please RSVP to danandfionaswedding@gmail.com (<a href="mailto:danandfionaswedding@gmail.com?Subject=Wedding%20RSVP" target="_top">Or click here</a>)</p>
                <p>We would be very grateful if you could let us know the following:</p>
                    <ul>
                        <li>If you can come (or not)</li>
                        <li>The names of who is coming</li>
                        <li>If you have any special dietary requirements</li>
                    </ul>
                <p>Thanking you in advance!</p>
                <h4>Dan & Fiona</h4>
            </div>
        </div>
    )
}

export default ContactContainer
