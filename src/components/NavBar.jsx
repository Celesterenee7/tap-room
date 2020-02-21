import React from "react";
import Banner from './images/banner.jpg';
import Logo from './images/logo.png';
import { Link } from 'react-router-dom';

function NavBar() {

    const image = {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
    }

    const logo = {
        width: "4%",
        paddingLeft: "25px"
    }

    const menu = {
        backgroundColor: "#EA9803",
        height: "80px",
        textAlign: "center",
        paddingTop: '20px',
        wordSpacing: '30px'
    }

    const navigation = {
        color: 'white',
        fontSize: '25px',
        textDecoration: 'none',
        fontWeight: '700',

    }

    const links = {
        textAlign: "center"
    }


    return (
        <div>
            <div style={menu}>
                <div style={links}>
                    <Link to="/">Home</Link>  | <Link to="/newbeerform">Add New Beer</Link> | <Link to="/editbeerform">Edit Existing Beer</Link>
                </div>
                <a className="menuLine" href="/path" style={navigation} > Beers </a>
                <a href="#" style={navigation} > Locations</a>
                <img className="beerimage" src={Logo} alt="logo" style={logo} />
                <a href="#" style={navigation} > About </a>
                <a href="#" style={navigation} > Contact </a>
            </div>
            <img src={Banner} alt="banner" style={image} />
        </div >
    );
}
export default NavBar;