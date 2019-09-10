import React from 'react';
import RestaurantList from './RestaurntList';
import Filters from './Filters';
import Map from './Map';
import './App.sass';

const App = () => {
  return (
    <div className="ui container grid app">
      <div className="row">
        <div className="nine wide column">
          <h1 className="title">Welcome to the area</h1>
          <p>Here are some tasty places you should check out:</p>
        </div>
      </div>
      <div className="row">
        <div className="nine wide column">
          <Filters />
          <RestaurantList />
        </div>
        <div className="seven wide column">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default App;
