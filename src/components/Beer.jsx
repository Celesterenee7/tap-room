import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
    return (
        <div>
            <p>Name: {props.name} </p>
            <p>Brand: {props.brand}</p>
            <p>Price: {props.price}</p>
            <p>ABV: {props.alcoholByVolume}</p>
            <br />
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