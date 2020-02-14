import React from 'react';
import Beer from './Beer';
import Vicious from './images/vicious.png';

const image = {
    width: '30%'
}

function BeerImage() {
    return (
        <div>
            <h1>Test</h1>
            <img src={Vicious} alt="vicious" style={image} />
        </div>
    );
}

export default BeerImage;
