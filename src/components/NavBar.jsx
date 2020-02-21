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
        paddingLeft: "10px",
        paddingBottom: "5px"
    }

    const menu = {
        backgroundColor: "#EA9803",
        height: "90px",
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


    return (
        <div>
            <div style={menu}>
                <Link to="/" className="menuLine" style={navigation}>Home</Link>
                <a href="/beers" style={navigation} > Beers </a>
                <img className="beerimage" src={Logo} alt="logo" style={logo} />
                <a href="#" style={navigation} > About </a>
                <a href="#" style={navigation} > Contact </a>
            </div>
            <img src={Banner} alt="banner" style={image} />
        </div >
    );
}
export default NavBar;