import React from 'react';
import BeerList from './BeerList';
import PropTypes from "prop-types";

const editBeer = {
    paddingTop: "15px",
    color: "#4D1A18"
}

const editform = {
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "400px"
}

function EditBeerForm() {
    return (
        <div style={editform}>
            <hr />
            <h3 style={editBeer}>Update an existing beer below!</h3>
            <form>
                <div className="row">
                    <div className="col">
                        <input className="form-control" type='text' id='name' placeholder='Beer Name' />
                    </div>
                    <div className="col">
                        <input className="form-control" type='text' id='brand' placeholder='Brand' />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <input className="form-control" type='text' id='price' placeholder='Price' />
                    </div>
                    <div className="col">
                        <input className="form-control" type='text' id='abv' placeholder='ABV' />
                    </div>
                </div>
                <br />
                <button type='submit'>Update</button>
            </form>
        </div>
    );
}

EditBeerForm.propTypes = {
    beer: PropTypes.object.isRequired,
};

export default EditBeerForm;