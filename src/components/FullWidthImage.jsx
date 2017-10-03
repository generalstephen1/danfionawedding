import React from "react"
import PropTypes from "prop-types"

import '../style/fullWidthImages.scss'

const propTypes = {
    imageClass: PropTypes.string.isRequired,
    filterClass: PropTypes.string,
    customStyles: PropTypes.object,
}

const FullWidthImage = (props) => {
    const imgClasses = `full-width-image ${props.imageClass}`
    const filterClasses = `img-filter ${props.filterClass}`
    return (
        <div style={{position: 'relative'}}>
            <div className={filterClasses}></div>
            <div className={imgClasses} style={props.customStyles}></div>
        </div>
    )
}

FullWidthImage.propTypes = propTypes
export default FullWidthImage;