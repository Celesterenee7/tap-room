import React from 'react';
import PropTypes from 'prop-types';
import Vicious from './images/vicious.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const beerButton = {
    padding: '5px 50px 5px 50px',
    backgroundColor: 'rgb(234, 152, 3)',
    color: 'white',
    borderRadius: '5px',
    marginBottom: '10px'
}

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


class Beer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pintCount: 50
        };
        this.pintCount = this.pintCount.bind(this);
    }

    pintCount(event) {
        let newpintCount = this.state.pintCount - 1
        this.setState({ pintCount: newpintCount });
    }


    render() {
        return (
            <div>
                <hr />
                <div className="row">
                    <div className="col-md-6" style={beerGroup}>
                        <p>Name: <em style={beerName}>{this.props.name}</em> </p>
                        <p>Brand: {this.props.brand}</p>
                        <p>Price: {this.props.price}</p>
                        <p>ABV: <strong>{this.props.abv}</strong></p>
                        <p>Pints Left:<span>{this.state.pintCount}</span></p>
                        <button style={beerButton} onClick={this.pintCount}>Buy Pint</button>
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
    abv: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default Beer;