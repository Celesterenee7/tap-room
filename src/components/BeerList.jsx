import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

const beers = [
    {
        name: "Vicious Mosquito IPA",
        brand: "Sunriver Brewery",
        price: "$6",
        alcoholByVolume: "7%"
    },
    {
        name: "Cocoa Cow - Chocolate Stout",
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
            <div>
                {beers.map((beer, index) =>
                    <Beer name={beer.name}
                        brand={beer.brand}
                        price={beer.price}
                        alcoholByVolume={beer.alcoholByVolume} />
                )}
            </div>
        </div>
    );
}


export default BeerList;

