import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const beerinfo = {
    paddingBottom: "80px"
}

const beerGroup = {
    paddingLeft: "150px"
}




function Beer(props) {
    return (
        <div>
            <div style={beerGroup}>
                <p>Name: {props.name} </p>
                <p>Brand: {props.brand}</p>
                <p>Price: {props.price}</p>
                <p style={beerinfo}>ABV: {props.alcoholByVolume}</p>
                <br />
            </div>
        </div>
    );
}

Beer.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    abv: PropTypes.string.isRequired
};

export default Beer;