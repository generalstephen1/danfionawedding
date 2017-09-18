import React from "react"
import PropTypes from "prop-types"

import '../style/fullWidthImages.scss'

const FullWidthImage = (props) => {
    const classes = `full-width-image ${props.imageClass}`
    const filterClasses = `img-filter ${props.filterClass}`
    return (
        <div>
            <div className={classes} style={props.customStyles}></div>
            <div className={filterClasses}></div>
        </div>
    )
}

export default FullWidthImage;