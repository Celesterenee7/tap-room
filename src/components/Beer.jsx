import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const beerinfo = {
    paddingBottom: "80px"
}

const beerGroup = {
    paddingLeft: "150px",
    fontSize: "20px"
}

const beerName = {
    color: "rgb(234, 152, 3)",
    fontWeight: "700"
}


function Beer(props) {
    return (
        <div>
            <div style={beerGroup}>
                <p>Name: <em style={beerName}>{props.name}</em> </p>
                <p>Brand: {props.brand}</p>
                <p>Price: {props.price}</p>
                <p style={beerinfo}>ABV: <strong>{props.alcoholByVolume}</strong></p>
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