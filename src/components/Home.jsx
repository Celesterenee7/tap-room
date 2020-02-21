import React from 'react';
import BeerList from './BeerList';


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

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;