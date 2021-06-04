import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalAppContext } from './';
import App from "./App"
import './App.css';
import Movies from './Pages/Movies';
import AddMovie from './Pages/Movies/AddMovie';
function GlobalApp() {
  const [movies, setMovies] = useState([
    { MovieId: '1', MovieName: 'test', LeadActor: 'actor' },
  ]);
  return (
    <div className='App'>
      <GlobalAppContext.Provider
        value={{
          state: { movies },
          setState: (movies) => setMovies(movies),
        }}
      >
        <Router>
          <Switch>
            <Route exact path='/'>
              <Movies />
            </Route>
            <Route exact path='/rest'>
              <App />
            </Route>
            <Route exact path='/addMovie'>
              <AddMovie />
            </Route>
            <Route path='/:MovieId'>
              <Movies />
            </Route>
          </Switch>
        </Router>
      </GlobalAppContext.Provider>
    </div>
  );
}

export default GlobalApp;
