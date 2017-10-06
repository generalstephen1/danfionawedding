import React from "react"
import PropTypes from "prop-types"

import '../style/countdown.scss'

const CountdownDisplay = (props) => {
    return (

        <div>
            <h2 className="countdown__title">16th August 2018</h2>
            <p className="countdown__text">{props.days} days, {props.hours}hrs {props.minutes}min {props.seconds}s to go!</p>
        </div>
    )
}

export default CountdownDisplay;