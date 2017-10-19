import React from "react"
import FullWidthImage from '../components/FullWidthImage'
import InContentMenu from '../components/InContentMenu'
import {
    Accomodation,
    ThingsToDo,
} from '../components/LocationsContent'



const AccomodationContainer = () => {


    return (
        <div className='page page__accomodation'>

            <InContentMenu items={[
                {'component': <Accomodation />, 'title': 'Accomodation'},
                {'component': <ThingsToDo />, 'title': 'Things to do'}
            ]}/>



        </div>
    )
}

export default AccomodationContainer
