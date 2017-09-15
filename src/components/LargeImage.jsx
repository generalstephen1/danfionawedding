import React from "react"
import PropTypes from "prop-types"

import '../style/bgImages.scss'



const LargeImage = (props) => {
    const imgStyle = {
        'width': props.width || "100%",
        'height': props.height || "3em",
    };
    return (
        <div className="large-image venue-image" style={imgStyle}></div>
    )
}

export default LargeImage;