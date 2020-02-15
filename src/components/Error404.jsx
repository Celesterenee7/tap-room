import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const error = {
    textAlign: "center",
    paddingTop: "50px",
    paddingBottom: "200px"
}

function Error404(props) {
    return (
        <div>
            <div style={error}>
                <h3>The page <em>{props.location.pathname}</em> does not exist!</h3>
                <h3>Please click on <Link to="/">home</Link> to get back to the Sunriver Brewery website</h3>
            </div>
        </div>
    );
}

Error404.propTypes = {
    location: PropTypes.object
};

export default Error404;