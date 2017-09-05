import * as React from 'react';

export default class Gallery extends React.Component {

    constructor() {
        super();
        this.state = { apiKey: '', img: null };
    }

    init = (e,t,n,r,c) => {
      let i=function(e,t){
        let n,
            r="IE",
            c=document.createElement("B"),
            i=document.documentElement;
        return e&&(r+=" "+e,t&&(r=t+" "+r)),c.innerHTML="<!--[if "+r+']><b id="iecctest"></b><![endif]-->',
        i.appendChild(c),n=!!document.getElementById("iecctest"),
        i.removeChild(c),n;};
        if(!e[n]&&(e[n]={
          process:function(t){
            (e[n].q=e[n].q||[]).push(t);
          },
          baseURL:"https://embedr.flickr.com"
        },!i(8,"lte"))){
          let d=t.createElement(r),
              m=t.getElementsByTagName(r)[0];
          d.async=1,
          d.src=c,
          m.parentNode.insertBefore(d,m);}
      };

    render = () => {
      this.init(window,document,"FlickrEmbedr","script","https://embedr.flickr.com/assets/embedr-loader.js");
      window.FlickrEmbedr.process("inline");
      return (
        <div>
          <a
            data-flickr-embed="true"
            data-footer="true"
            data-context="true"
            href="https://www.flickr.com/photos/flickr/36753454756/in/dateposted/"
            title="Dog Day - a Flickr gallery">
              <img
                src="https://farm5.staticflickr.com/4339/36753454756_5144acd39b_b.jpg"
                width="1024"
                height="768"
                alt="Dog Day - a Flickr gallery" />
          </a>
          <script charSet="utf-8">
            !
          </script>
        </div>
      );
    }
}
