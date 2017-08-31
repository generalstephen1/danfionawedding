import * as React from 'react';

export default class FlickrGallery extends React.Component {

    constructor() {
        super();
        this.state = { apiKey: '', img: null };
    }

    render = () => {
        const { apiKey } = this.state;
        return(
          <div>
            I ARE FLICKR!!!!
          </div>
        );
    }
}
