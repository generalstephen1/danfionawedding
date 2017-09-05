import * as React from 'react';

export default class VideoGallery extends React.Component {

    constructor() {
        super();
        this.state = { apiKey: '', img: null };
    }

    render = () => {
      return (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PL6jbdJ3GkHRQg0mITbYscqrlpRA1Cc88W"
          allowfullscreen>
        </iframe>
      );
    }
}
