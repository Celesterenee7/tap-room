import React from 'react';

const addBeer = {
    paddingTop: "15px",
    color: "#4D1A18"
}

const beerform = {
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "400px"
}

function NewBeerForm() {
    return (
        <div style={beerform}>
            <hr />
            <h3 style={addBeer}>Add a new beer below!</h3>
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
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default NewBeerForm;