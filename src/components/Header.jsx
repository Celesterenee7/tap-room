import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <h1>Add Beer</h1>
            <Link to="/">Home</Link> | <Link to="/newticket">Add New Beer</Link>
        </div>
    );
}

export default Header;