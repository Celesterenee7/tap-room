import React from 'react';
import Header from './Header';
import Beer from './Beer';
import PropTypes from 'prop-types';

const sunriverBeers = [
    {
        name: "Vicious Mosquito IPA",
        brand: "Sunriver Brewery",
        price: "$6",
        alcoholByVolume: "7%"
    },
    {
        name: "Cocoa Cow - Chocolate Milk Stout",
        brand: "Sunriver Brewery",
        price: "$5.50",
        alcoholByVolume: "7%"
    },
    {
        name: "Fuzztail Hefeweizen",
        brand: "Sunriver Brewery",
        price: "$5",
        alcoholByVolume: "5%"
    },
    {
        name: "Shred Head Seasonal Ale",
        brand: "Sunriver Brewery",
        price: "$6",
        alcoholByVolume: "8%"
    },

];

function BeerList(props) {
    return (
        <div>
            <p>Name: {props.name} </p>
            <p>Brand: {props.brand}</p>
            <p>Price: {props.price}</p>
            <p>ABV: {props.alcoholByVolume}</p>
            <ul>
                {props.selection.map((crop) =>
                    <li>{crop}</li>
                )}
            </ul>
            <br />
        </div>
    )
}

Beer.propTypes = {

};
export default Beer;

