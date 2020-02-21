import React from 'react';
import PropTypes from 'prop-types';
import Heart from './images/heart.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const beerinfo = {

}

const beerGroup = {
    paddingLeft: "150px",
    fontSize: "20px"
}

const beerName = {
    color: "rgb(234, 152, 3)",
    fontWeight: "700"
}

const heartImage = {
    width: "3%"
}


class Beer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            heartCount: 0
        };
        this.increaseHeartCount = this.increaseHeartCount.bind(this);
    }

    increaseHeartCount(event) {
        let newHeartCount = this.state.heartCount + 1
        this.setState({ heartCount: newHeartCount });
    }

    render() {
        return (
            <div>
                <div style={beerGroup}>
                    <p>Name: <em style={beerName}>{this.props.name}</em> </p>
                    <p>Brand: {this.props.brand}</p>
                    <p>Price: {this.props.price}</p>
                    <p style={beerinfo}>ABV: <strong>{this.props.abv}</strong></p>
                    <a onClick={this.increaseHeartCount}><img src={Heart} alt="heart" style={heartImage} /></a><span>{this.state.heartCount}</span>
                    <br />
                </div>
            </div>
        );
    }
}

Beer.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    abv: PropTypes.string.isRequired
};

export default Beer;