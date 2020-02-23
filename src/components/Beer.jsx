import React from 'react';
import PropTypes from 'prop-types';
import Vicious from './images/vicious.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const beerButton = {
    padding: '5px 50px 5px 50px',
    backgroundColor: 'rgb(234, 152, 3)',
    color: 'white',
    borderRadius: '5px',
    marginBottom: '15px'
}

const beerGroup = {
    paddingLeft: "150px",
    fontSize: "20px",
    paddingBottom: "80px"
}

const beerId = {
    display: "none"
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

const toggle = {
    cursor: "pointer",
    fontSize: '18px',
    color: "#AD130D"
}

class Beer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pints: 50,
            show: true
        };
    }

    addPint = () => {
        this.setState({ pints: this.state.pints + 1 });
    }
    subtractPint = () => {
        this.setState({ pints: this.state.pints - 1 });
    }
    toggleClick = () => {
        this.setState({ show: !this.state.show });
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
                        <p>ABV: <strong>{this.props.abv}</strong>%</p>
                        <button onClick={this.addPint} style={beerButton}>Add Pint</button>
                        <br />
                        <button onClick={this.subtractPint} style={beerButton}>Sell Pint</button>
                        <br />
                        {this.state.show ? <h3>Pints Left :  {this.state.pints}</h3> : ''}
                        <a onClick={this.toggleClick} style={toggle}>
                            {this.state.show ? '- Remove List of Pints - ' : '- Show Beer Pints - '}
                        </a>
                        <br />
                        <hr />
                        <Link to="/editbeer"> - Edit Existing Beer - <span style={beerId}>{this.props.id}</span></Link>
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