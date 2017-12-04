import React from "react"
import PropTypes from "prop-types"

import '../style/embeds.scss'


const GiphyEmbed = (props) => {
    const giphyURL = props.giphyURL;

    // <div style={{'width':'50%', 'height':'0', 'padding-bottom':'33%', 'position':'relative', 'margin-left': "25%"}}>
    return (
        <div>
            <div className="giphy-embed-wrapper">
            <iframe src="https://giphy.com/embed/F9hQLAVhWnL56"
                    width="100%"
                    height="100%"
                    style={{'position':'absolute'}}
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen>
            </iframe>
            </div><p><a href="https://giphy.com/gifs/F9hQLAVhWnL56">via GIPHY</a></p>
        </div>
    )
}
export default GiphyEmbed;