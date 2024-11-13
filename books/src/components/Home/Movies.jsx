import React, { useState, useEffect } from 'react';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const API_KEY = '977ed025515af5100a62a22770595d94';
    const BASE_URL = 'https://api.themoviedb.org/3';

    const fetchMovies = async () => {
        setLoading(true);
        setError(null);
    
        try {
          const response = await fetch(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
          );
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          setMovies(data.results);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchMovies();
      }, []);
  
    return (
        <div>
             {loading && <p>Loading...</p>}

             {error && <p style={{ color: 'red' }}>{error}</p>}

             <div className='movies'>
                 {movies.length > 0 ? (
                 movies.map((movie) => (
                <div key={movie.id} style={{ width: '200px', textAlign: 'center' }}>
                <h3>{movie.title}</h3>
                {movie.poster_path ? (
                  <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: '100%', borderRadius: '10px' }}
                  />
                  ) : (<p>No Image Available</p>)}
                <p>Rating: {movie.vote_average}</p>
                </div>
                 ))
                ) : (<p>No movies found</p>)}
              </div>
        </div>
    );
}

export default Movies;