import React from "react";
import { Link } from 'react-router-dom';

const links = {
    textAlign: "center"
}

function Header() {
    return (
        <div style={links}>
            <Link to="/newbeer">Add New Beer</Link> | <Link to="/editbeer">Edit Existing Beer</Link>
        </div>
    );
}

export default Header;