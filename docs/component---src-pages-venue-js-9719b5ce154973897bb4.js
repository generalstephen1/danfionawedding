webpackJsonp([0xed9f13ecf27],{81:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(1),r=a(o),u=n(5);a(u);n(74);var i={className:"google-map__iframe",width:"600",height:"450",frameBorder:"0",allowFullScreen:"true"},c=function(e){var t={weddingVenue:r.default.createElement("iframe",l({},i,{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23149.94032320681!2d-6.758194500884321!3d53.027689902943806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486787e049d7ee37%3A0xc9906f925f6abd8f!2sRathsallagh+House+Hotel+%26+Golf+Club!5e0!3m2!1sen!2sie!4v1505837121745"})),weddingCeremony:r.default.createElement("iframe",l({},i,{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d76653.00368202542!2d-6.597902264843751!3d53.10289562167099!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48679b41aa0c2705%3A0xb2e2c378b588cd35!2sSt+Joseph's+Church!5e0!3m2!1sen!2sie!4v1507018232084"})),weddingCeremonyToReception:r.default.createElement("iframe",l({},i,{src:"https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d76700.39432586227!2d-6.6995258000000035!3d53.076297400000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x48679b41aa0c2705%3A0xb2e2c378b588cd35!2sSt+Joseph's+Church%2C+Valleymount%2C+Co.+Wicklow!3m2!1d53.1070814!2d-6.5248783999999995!4m5!1s0x486787e049d7ee37%3A0xc9906f925f6abd8f!2sRathsallagh+House+Hotel+%26+Golf+Club%2C+Rathsallagh+Demesne%2C+Dunlavin%2C+Co.+Wicklow!3m2!1d53.028256!2d-6.7276451999999995!5e0!3m2!1sen!2sie!4v1507018407074"}))};return t[e]},s=function(e){"full-width-image "+e.imageClass,"img-filter "+e.filterClass;return r.default.createElement("div",{className:"google-map__container"},c(e.mapLocation))};t.default=s,e.exports=t.default},82:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=n(1),c=a(i);n(115);var s=function(e){function t(){var n,a,r;l(this,t);for(var i=arguments.length,s=Array(i),f=0;f<i;f++)s[f]=arguments[f];return n=a=o(this,e.call.apply(e,[this].concat(s))),a.state={activeItem:"0"},a.generateElements=function(e){for(var t=[],n=[],l=100/e.length,o=0,r=e,u=Array.isArray(r),i=0,r=u?r:r[Symbol.iterator]();;){var c;if(u){if(i>=r.length)break;c=r[i++]}else{if(i=r.next(),i.done)break;c=i.value}var s=c,f=""+o===a.state.activeItem,m=a.newMenuElement(s.title,o,l,f),d=a.newContentElement(s.component,o,f);t.push(m),n.push(d),o++}return{menuElements:t,contentElements:n}},a.menuClickFn=function(e){a.setState(u(a.state,{activeItem:e}))},a.newMenuElement=function(e,t,n,l){var o="in-content-menu__menu__item",r=l?o+"--active":"";return c.default.createElement("li",{className:o+" "+r,onClick:function(){a.menuClickFn(""+t)},style:{width:n+"%"},key:""+t},e)},a.newContentElement=function(e,t,n){var a="in-content-menu__content__item",l=n?a+"--active":"";return c.default.createElement("div",{className:a+" "+l,key:""+t},e)},a.render=function(){var e=a.generateElements(a.props.items),t=e.menuElements,n=e.contentElements;return c.default.createElement("div",{className:"in-content-menu"},c.default.createElement("ul",{className:"in-content-menu__menu centered-content"},t),c.default.createElement("div",{className:"in-content-menu__content"},n))},r=n,o(a,r)}return r(t,e),t}(c.default.Component);t.default=s,e.exports=t.default},228:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Venue=t.Directions=void 0;var l=n(1),o=a(l),r=n(25),u=a(r),i=n(81),c=a(i);t.Directions=function(e){return o.default.createElement("div",null,o.default.createElement(u.default,{imageClass:"church-image",filterClass:"img-filter__none",customStyles:{backgroundPositionY:"-190px"}}),o.default.createElement("div",{className:"centered-content"},o.default.createElement("div",{className:"centered-text"},o.default.createElement("h2",null,"Directions from the Church to the Venue"))),o.default.createElement(c.default,{mapLocation:"weddingCeremonyToReception"}))},t.Venue=function(e){return o.default.createElement("div",null,o.default.createElement(u.default,{imageClass:"venue-image",customStyles:{backgroundPositionY:"-200px"}}),o.default.createElement("div",{className:"centered-content"},o.default.createElement("h2",null,"The Venue :"),o.default.createElement("br",null),o.default.createElement("p",null,o.default.createElement("a",{href:"https://www.rathsallagh.com/",target:"_blank"},"Rathsallagh Housе, Dunlavin, Co.Wicklow, W91 XK68")),o.default.createElement("p",null,"Rathsallagh House is approximately 50-60km (50mins) from Dublin.")),o.default.createElement(c.default,{mapLocation:"weddingVenue"}),o.default.createElement("div",{className:"centered-content"},o.default.createElement("h2",null,"How to get there"),o.default.createElement("h3",null,"From Dublin/The West ( Dublin Airport ) ( driving time 1 hour )"),o.default.createElement("p",null,"Take the M50 south bound ( for Naas, Kildare ) ."),o.default.createElement("p",null,"There is an automatic cash free toll bridge on the M50. Some car hire firms do include this toll in the rental agreement, check at the airport desk for details. If its not covered you will need to pay the toll at any petrol station after using it or online."),o.default.createElement("p",null,"Come off the M50 for Naas, Kildare, the South - N7 South Exit the N7 at junction 11 for the M9 southbound."),o.default.createElement("p",null,"The Road Signs will direct you towards Waterford / Carlow / Kilkenny. Exit at Junction 3."),o.default.createElement("p",null,"Take a left coming off the ramp at roundabout for the R747 Baltinglass. At the next T junction take a left onto the R448 for Crookstown. Pass Crookstown service station and take the next right for Dunlavin. 3 km for Rathsallagh House and Rathsallagh Golf Club sign posted as you approach."),o.default.createElement("br",null),o.default.createElement("h3",null,"From South Dublin ( Dunlaoghaire) ( driving time 1 hour )"),o.default.createElement("p",null,"Take the R113 to the M50 and exit for Tallaght taking the N81 ( South ) to Blessington. Go straight through Blessington on the Baltinglass road and follow this road for about Six miles to Hollywood Cross and take a right to Dunlavin."),o.default.createElement("p",null,"Toughers Petrol Station, and signs for Wicklow Gap on the left."),o.default.createElement("p",null,"Into Dunlavin village, past the Court House in the centre of the street, and make a right turn out of the village for Rathsallagh."),o.default.createElement("p",null,"Entrance to Rathsallagh is 3 miles from village on left.")))}},234:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),o=a(l),r=n(25),u=(a(r),n(82)),i=a(u),c=n(228),s=function(){return o.default.createElement("div",{className:"page page__venue"},o.default.createElement(i.default,{items:[{component:o.default.createElement(c.Venue,null),title:"The Venue"},{component:o.default.createElement(c.Directions,null),title:"The Church"}]}))};t.default=s,e.exports=t.default},74:function(e,t){},115:function(e,t){}});
//# sourceMappingURL=component---src-pages-venue-js-9719b5ce154973897bb4.js.map