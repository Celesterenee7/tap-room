import React from 'react';
import BeerList from './BeerList';


function Home() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <BeerList />
                </div>
            </div>
        </div>
    );
}

export default Home;