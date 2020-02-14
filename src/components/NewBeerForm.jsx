import React from 'react';

const beerform = {
    textAlign: "center",
    paddingTop: "40px",
    paddingBottom: "400px"
}

function NewBeerForm() {
    return (
        <div style={beerform}>
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