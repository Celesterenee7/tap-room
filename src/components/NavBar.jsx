import React from "react";
import Banner from './images/banner.jpg';
import Logo from './images/logo.png';

function NavBar() {

    const image = {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
    }

    const logo = {
        width: "3%"
    }

    const menu = {
        backgroundColor: "#EA9803",
        height: "80px",
        textAlign: "center",
        paddingTop: '20px',
        wordSpacing: '20px'
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
                <a className="menuLine" href="#" style={navigation} > Home </a>
                <a href="#" style={navigation} > Work </a>
                <img className="beerimage" src={Logo} alt="logo" style={logo} />
                <a href="#" style={navigation} > About </a>
                <a href="#" style={navigation} > Contact </a>
            </div>
            <img src={Banner} alt="banner" style={image} />
        </div>
    );
}
export default NavBar;