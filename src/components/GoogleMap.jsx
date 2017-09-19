import React from "react"
import PropTypes from "prop-types"

import '../style/googleMap.scss'

const locations = {
    weddingVenue: '!1m18!1m12!1m3!1d23149.94032320681!2d-6.758194500884321!3d53.027689902943806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486787e049d7ee37%3A0xc9906f925f6abd8f!2sRathsallagh+House+Hotel+%26+Golf+Club!5e0!3m2!1sen!2sie!4v1505837121745',
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