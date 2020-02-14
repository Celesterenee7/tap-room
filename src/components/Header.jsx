import React from "react";
import { Link } from 'react-router-dom';

const links = {
    textAlign: "center"
}

function Header() {
    return (
        <div style={links}>
            <Link to="/">Home</Link> | <Link to="/newbeerform">Add New Beer</Link>
        </div>
    );
}

export default Header;