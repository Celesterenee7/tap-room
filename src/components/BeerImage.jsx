import React from 'react';
import Beer from './Beer';
import Vicious from './images/vicious.png';
import Cocoa from './images/cocoa.jpg';

const image = {
    width: '25%',
    paddingBottom: "50px",
    marginLeft: "100px"

}

function BeerImage() {
    return (
        <div>
            <img src={Vicious} alt="vicious" style={image} />
            <div>
                <img src={Cocoa} alt="vicious" style={image} />
            </div>
        </div>
    );
}

export default BeerImage;
