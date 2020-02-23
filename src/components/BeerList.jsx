import React from "react";
import Beer from "./Beer";
import PropTypes from 'prop-types';

function BeerList(props) {
    return (
        <div>
            {props.beerList.map((beer, index) =>
                <Beer name={beer.name}
                    brand={beer.brand}
                    price={beer.price}
                    abv={beer.abv}
                    pintCount={beer.pintCount}
                    soldOut={beer.soldOut}
                    key={index}
                    id={beer.key}
                />
            )}
        </div>
    );
}

BeerList.propTypes = {
    beerList: PropTypes.array
};

export default BeerList;

