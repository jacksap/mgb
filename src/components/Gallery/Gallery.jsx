import React from 'react';
import './Gallery.css';

const Gallery = (props) => {
    return(
    <div>
        <div>Gallery COMPONENT</div>
        <img alt='poster' src='./static/images/flyers/newbeatshowcase011917.png'></img>
        {/* I can map every image via a backend Image URL model? Maybe a gallery style... */}
    </div>
    );
}


export default Gallery;
