import React from 'react';
import BeerList from './BeerList';
import BeerImage from './BeerImage';


function Home() {
    return (
        <div>
            <hr />
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