import React from "react"
import LargeImage from "../components/LargeImage"

const ContactContainer = () => {

    return (
        <div>
            <LargeImage
                width="960px"
                height="200px"
                backgroundImage="img/venue.jpg"
                />
            <p> This will have an rsvp form and contact details </p>
        </div>
    )
}

export default ContactContainer
