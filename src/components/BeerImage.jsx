import React from 'react';
import Beer from './Beer';
import Vicious from './images/vicious.png';
import Cocoa from './images/cocoa.jpg';
import Fuzztail from './images/fuzztail.jpg';
import Shredhead from './images/shredhead.jpg';


const beerimage = {
    width: '25%',
    paddingBottom: "90px",
    marginLeft: "100px"

}

function BeerImage() {
    return (
        <div>
            <div className="beerimage">
                <img src={Vicious} alt="vicious" style={beerimage} />
            </div>
            <div className="beerimage">
                <img src={Cocoa} alt="vicious" style={beerimage} />
            </div>
            <div className="beerimage">
                <img src={Fuzztail} alt="fuzztail" style={beerimage} />
            </div>
            <div className="beerimage">
                <img src={Shredhead} alt="shredhead" style={beerimage} />
            </div>


        </div>
    );
}

export default BeerImage;
