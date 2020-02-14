import React from 'react';
import BeerList from './BeerList';
import BeerImage from './BeerImage';


function Home() {
    return (
        <div>
            <h1>Beer is good</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <BeerList />
                    </div>
                    <div className="col-md-6">
                        <BeerImage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;