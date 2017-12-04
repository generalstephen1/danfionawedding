import React from "react"
import PropTypes from "prop-types"

import '../style/embeds.scss'

const iframeBits = {
    'className':"google-map__iframe",
    'width':"600",
    'height':"450",
    'frameBorder':"0",
    'allowFullScreen' : 'true',
}

const iFrame = (location) => {
    const locations = {
        'weddingVenue': (
            <iframe {...iframeBits}
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23149.94032320681!2d-6.758194500884321!3d53.027689902943806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486787e049d7ee37%3A0xc9906f925f6abd8f!2sRathsallagh+House+Hotel+%26+Golf+Club!5e0!3m2!1sen!2sie!4v1505837121745'></iframe>),
        'weddingCeremony': (
            <iframe {...iframeBits}
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d76653.00368202542!2d-6.597902264843751!3d53.10289562167099!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48679b41aa0c2705%3A0xb2e2c378b588cd35!2sSt+Joseph&#39;s+Church!5e0!3m2!1sen!2sie!4v1507018232084'></iframe>),
        'weddingCeremonyToReception': (
            <iframe {...iframeBits}
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d76700.39432586227!2d-6.6995258000000035!3d53.076297400000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x48679b41aa0c2705%3A0xb2e2c378b588cd35!2sSt+Joseph&#39;s+Church%2C+Valleymount%2C+Co.+Wicklow!3m2!1d53.1070814!2d-6.5248783999999995!4m5!1s0x486787e049d7ee37%3A0xc9906f925f6abd8f!2sRathsallagh+House+Hotel+%26+Golf+Club%2C+Rathsallagh+Demesne%2C+Dunlavin%2C+Co.+Wicklow!3m2!1d53.028256!2d-6.7276451999999995!5e0!3m2!1sen!2sie!4v1507018407074"></iframe>)
    }
    return locations[location];
}


const GoogleMap = (props) => {
    const imgClasses = `full-width-image ${props.imageClass}`;
    const filterClasses = `img-filter ${props.filterClass}`;

    return (
        <div className="google-map__container">
            {iFrame(props.mapLocation)}
        </div>
    )
}
export default GoogleMap;