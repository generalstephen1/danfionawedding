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

/**
 * Official Google Embed
 * <iframe
    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d39737.97751578222!2d-0.18167110698157565!3d51.5017745106555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x487604af370a52bb%3A0x63ed6f45ea671fa4!2sMediaocean%2C+Southwark+Street%2C+London!3m2!1d51.506099999999996!2d-0.0999611!4m5!1s0x48760f8b651567e1%3A0xf4f4f59620b78522!2s238+Earls+Court+Road%2C+London!3m2!1d51.4920129!2d-0.1929623!5e0!3m2!1sen!2suk!4v1505808856767"
    width="600"
    height="450"
    frameborder="0"
    style="border:0"
    allowfullscreen></iframe>
 */

export default VenueContainer
