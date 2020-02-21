import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

const editBeer = {
    paddingTop: "15px",
    color: "#4D1A18"
}

const editform = {
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "400px"
}

function EditBeerForm(props) {
    let _name = null;
    let _brand = null;
    let _price = null;
    let _abv = null;

    function handleNewBeerFormSubmission(event) {
        event.preventDefault();
        props.onNewBeerCreation({
            name: _name.value,
            brand: _brand.value,
            price: _price.value,
            abv: _abv.value,
            id: v4(),
        });
        _name.value = '';
        _brand.value = '';
        _price.value = '';
        _abv.value = '';
    }

    return (
        <div style={editform}>
            <hr />
            <h3 style={editBeer}>Update an existing beer below!</h3>
            <form>
                <div className="row">
                    <div className="col">
                        <input className="form-control" type='text' id='name' placeholder='Beer Name' ref={(input) => { _name = input; }} />
                    </div>
                    <div className="col">
                        <input className="form-control" type='text' id='brand' placeholder='Brand' ref={input => {
                            _brand = input;
                        }} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <input className="form-control" type='text' id='price' placeholder='Price' ref={input => {
                            _price = input;
                        }} />
                    </div>
                    <div className="col">
                        <textarea className="form-control" id='abv' placeholder='ABV' ref={(textarea) => { _abv = textarea; }} />
                    </div>
                </div>
                <br />
                <button className="buttonStyle" type='submit'>Update</button>
            </form>
            <br />
            <Link to="/">Return Home</Link>
        </div>
    );
}

EditBeerForm.propTypes = {
    beer: PropTypes.object.isRequired,
};

export default EditBeerForm;