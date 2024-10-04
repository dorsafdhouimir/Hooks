// import React, { useState } from 'react';

import React, { useState } from 'react';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.posterURL} alt={movie.title} />
    <h3>{movie.title}</h3>
    <p>{movie.description}</p>
    <p>Rating: {movie.rating}</p>
  </div>
);

const Filter = ({ setFilter }) => (
  <div>
    <input
      placeholder="Filter by Title"
      onChange={e => setFilter(prev => ({ ...prev, title: e.target.value }))}
    />
    <input
      placeholder="Filter by Rating"
      type="number"
      onChange={e => setFilter(prev => ({ ...prev, rating: e.target.value }))}
    />
  </div>
);

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', posterURL: '', rating: '' });
  const [filter, setFilter] = useState({ title: '', rating: '' });

  const addMovie = () => {
   
  };

  const filteredMovies = movies.filter(movie =>
    (filter.title ? movie.title.toLowerCase().includes(filter.title.toLowerCase()) : true) &&
    (filter.rating ? movie.rating === Number(filter.rating) : true)
  );

  return (
    <div>
      <Filter setFilter={setFilter} />
      <input
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
      />
      <input
        placeholder="Poster URL"
        value={form.posterURL}
        onChange={e => setForm({ ...form, posterURL: e.target.value })}
      />
    
      <button onClick={addMovie}>Add Movie</button>
      <div>{filteredMovies.map((movie, index) => <MovieCard key={index} movie={movie} />)}</div>
    </div>
  );
};

const App = () => (
  <div>
    <h1>Movie App</h1>
    <MovieList />
  </div>
);

export default App;
