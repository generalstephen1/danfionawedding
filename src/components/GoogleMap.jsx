import React from "react"
import PropTypes from "prop-types"

import '../style/googleMap.scss'

const locations = {
    weddingVenue: '!1m28!1m12!1m3! 1d19867.56734227554 !2d-0.13843511180246276!3d51.50503464661045!2m3 !1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x487604af370a52bb%3A0x63ed6f45ea671fa4!2sMediaocean%2C+Southwark+Street%2C+London!3m2!1d51.506099999999996!2d-0.0999611!4m5!1s0x48760520cd5b5eb5%3A0xa26abf514d902a7!2sBuckingham+Palace%2C+Westminster%2C+London+SW1A+1AA!3m2!1d51.501363999999995!2d-0.14189!5e0!3m2!1sen!2suk!4v1505831113188',
}

const propTypes = {
    location: PropTypes.string.required,
}

const GoogleMap = (props) => {
    const imgClasses = `full-width-image ${props.imageClass}`;
    const filterClasses = `img-filter ${props.filterClass}`;
    const mapsUrl = 'https://www.google.com/maps/embed';
    const iframeSrc = `${mapsUrl}?pb=${locations[props.location]}`

    return (
        <div className="google-map__container">
            <iframe
                className="google-map__iframe"
                src={iframeSrc}
                width="600"
                height="450"
                frameBorder="0"
                style={{"border":0}}>
            </iframe>
        </div>
    )
}

GoogleMap.propTypes = propTypes
export default GoogleMap;