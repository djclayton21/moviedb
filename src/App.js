import React from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie.js';

const movies = [
  {
    id: 1,
    title: 'Star Wars'
  },
  {
    id: 2,
    title: 'Spider Man'
  },
  {
    id: 3,
    title: '36th Chamber of Shaolin'
  },
  {
    id: 4,
    title: '37th Chamber of Shaolin'
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default App;
