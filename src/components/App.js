import React from 'react';
import RestaurantList from './RestaurntList';
import Filters from './Filters';
import './App.sass';

const App = () => {
    return (
        <div className="ui container grid app">
            <div className="seven wide column">
                <h1 className="title">Welcome to the area</h1>
                <p>Here are some tasty places you should check out:</p>
                <Filters />
                <RestaurantList />
            </div>
        </div>
    )
};

export default App;