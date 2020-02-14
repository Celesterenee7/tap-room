import React from 'react';
import BeerList from './BeerList';
import Beer from './Beer';


function Home() {
    return (
        <div className="Home">
            <div className="row">
                <div className="col-md-6">
                    <BeerList />
                </div>
            </div>
        </div>
    );
}

export default Home;