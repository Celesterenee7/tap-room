import React from 'react';
import PropTypes from 'prop-types';
import Vicious from './images/vicious.png';
import Heart from './images/heart.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const beerGroup = {
    paddingLeft: "150px",
    fontSize: "20px",
    paddingBottom: "80px"
}

const beerimage = {
    width: '25%',
    paddingTop: "10px",
    marginLeft: "150px",
}

const beerName = {
    color: "rgb(234, 152, 3)",
    fontWeight: "700"
}

const heartImage = {
    width: "5%",
}

class Beer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            heartCount: 0
        };
        this.heartCount = this.heartCount.bind(this);
    }

    heartCount(event) {
        let newHeartCount = this.state.heartCount + 1
        this.setState({ heartCount: newHeartCount });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6" style={beerGroup}>
                        <p>Name: <em style={beerName}>{this.props.name}</em> </p>
                        <p>Brand: {this.props.brand}</p>
                        <p>Price: {this.props.price}</p>
                        <p>ABV: <strong>{this.props.abv}</strong></p>
                        <a onClick={this.heartCount}><img src={Heart} alt="heart" style={heartImage} /></a><span>{this.state.heartCount}</span>
                        <br />
                    </div>
                    <div className="col-md-6">
                        <div className="beerimage">
                            <img src={Vicious} alt="vicious" style={beerimage} />
                        </div>
                    </div>
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