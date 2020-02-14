import React from "react";
import Banner from './images/banner.jpg';

function Header() {
    const image = {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
    }

    const navigation = {
        color: 'white',
        fontSize: '25px',
        textDecoration: 'none',
        fontWeight: '700'
    }

    const menu = {
        backgroundColor: "#FFC0CB",
        height: "80px",
        textAlign: "center",
        paddingTop: '20px',
        wordSpacing: '20px'
    }


    return (
        <div>
            <img src={Banner} alt="banner" style={image} />
            <div style={menu}>
                <a href="#" style={navigation} > Home </a>
                <a href="#" style={navigation} > Work </a>
                <a href="#" style={navigation} > About </a>
                <a href="#" style={navigation} > Contact </a>
            </div>
        </div>
    );
}
}
export deafult Header;