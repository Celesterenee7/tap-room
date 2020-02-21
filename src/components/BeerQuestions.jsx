import React from 'react';
import PropTypes from 'prop-types';

function BeerQuestions(props){
  return (
    <div>
      <p>Are you sure you want to add this beer to the list?</p>
      <button onClick={props.onTroubleshootingBeer}>Yes</button>
    </div>
  );
}

BeerQuestions.propTypes = {
  onTroubleshootingBeer: PropTypes.func
};

export default BeerQuestions;