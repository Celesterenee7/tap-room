import React from 'react';
import PropTypes from 'prop-types';

const beerQuestion = {
    fontSize: "25px",
    textAlign: "center",
    paddingTop: "40px",
    paddingBottom: "100px"

}

function BeerQuestions(props) {
    return (
        <div>
            <hr />
            <div style={beerQuestion}>
                <p>Are you sure you want to add this beer to the list?</p>
                <button className="buttonStyle" onClick={props.onTroubleshootingBeer}>Yes</button>
            </div>
        </div>
    );
}

BeerQuestions.propTypes = {
    onTroubleshootingBeer: PropTypes.func
};

export default BeerQuestions;