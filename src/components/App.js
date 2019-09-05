import React from 'react';
import RestaurantList from './RestaurntList';
import Map from './Map';
import './App.sass';

const App = () => {
    return (
        <div className="ui container grid app">
            <div className="row">
                <div className="seven wide column">
                    <h1 className="title">Welcome to the area</h1>
                    <p>Here are some tasty places you should check out:</p>
                </div>
            </div>
            <div className="row">
                <div className="seven wide column">
                    <RestaurantList />
                </div>
                <div className="nine wide column">
                    <Map />
                </div>
            </div>
        </div>
    )
};

export default App;