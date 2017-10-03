import React from "react"
import PropTypes from "prop-types"

import '../style/countdown.scss'

const CountdownDisplay = (props) => {
    return (

        <div>
            <h2 className="countdown__title">17th September 2018</h2>
            <h2 className="countdown__text">{props.days} days, {props.hours} hours, and {props.minutes} minutes to go!</h2>
        </div>
    )
}

export default CountdownDisplay;