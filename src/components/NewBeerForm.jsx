import React from 'react';

function NewBeerForm() {
    return (
        <div>
            <form>
                <input type='text' id='name' placeholder='Beer Name' />
                <input type='text' id='brand' placeholder='Brand' />
                <input type='text' id='price' placeholder='Price' />
                <input type='text' id='abv' placeholder='ABV' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default NewBeerForm;