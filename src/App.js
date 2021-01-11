import React, { Component } from 'react';
import './App.css';
import Movie from './components/movies';
import NavBar from './components/navbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import MovieForm from './components/moviesForm';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar/>
      <Switch>
          <Route
            path="/movies/:name"
            render={(props) => <MovieForm {...props}  />}
          ></Route>
          <Route
            path="/movies"
            render={(props) => <Movie {...props}  />}
          ></Route>
        
          <Redirect from="/" to="/movies" />
        </Switch>
      </React.Fragment>
      
    </div>
  );
}

export default App;
