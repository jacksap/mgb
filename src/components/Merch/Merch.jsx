import React from 'react';
import './Merch.css';

const Merch = (props) => {
    return(
    <div>
        <div>Merch COMPONENT</div>
        {/* this could be persisted on the backend */}
        <ul>
            <li>Shirt</li>
            <li>EP</li>
            <li>LP</li>
            <li>Sticker</li>
        </ul>
    </div>
    );
}

export default Merch;