import React from "react"
import FullWidthImage from '../components/FullWidthImage'
import InContentMenu from '../components/InContentMenu'

import {
    Directions,
    Venue,
} from '../components/VenueContent'

const VenueContainer = () => {
    return (
        <div className='page page__venue'>
            <InContentMenu items={[
                {'component': <Venue />, 'title': 'The Venue'},
                {'component': <Directions />, 'title': 'The Church'}
            ]}/>
        </div>
    )
}

export default VenueContainer
