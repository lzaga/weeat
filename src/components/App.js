import React from 'react';
import RestaurantList from './RestaurntList';
import './App.css';

const App = () => {
    return (
        <div className="ui container grid app">
            <div className="ui row">
                <div className="seven wide column">
                    <h1>Welcome to the area</h1>
                    <p>Here are some places you should check out</p>
                    <RestaurantList />
                </div>
            </div>
        </div>
    )
};

export default App;