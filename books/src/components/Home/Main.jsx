import React, { useState} from 'react';
import './home.css';
import Slider from './Slider';

function Main({ movies }) {
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  if (!movies.length) {
    return (
        <div className='content'>
            <div className='animation'></div>
            <div>
               <Slider></Slider>
            </div>
        </div>
    );
}
return(
  <div className='search-movies'>  
  <div className='movies'>
  {movies.map((movie) => (
    <div key={movie.id} className='movies-item'
    style={{
      boxShadow: hoveredMovieId === movie.id ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
      transition: 'box-shadow 0.3s ease', 
    }}
    onMouseEnter={() => setHoveredMovieId(movie.id)}
    onMouseLeave={() => setHoveredMovieId(null)}
    >
       <div className='container-img'>
       <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className='movie-image' />
       </div>
       <h2 className='title-movie'>{movie.title}</h2>
       <p className='description category'><strong>Release date: </strong>{movie.release_date}</p>
       <p className='description'><strong>Rating: </strong>{movie.vote_average}</p>
       <div className='movie-button'
       style={{
        maxHeight: hoveredMovieId === movie.id ? '100px' : '0',
        opacity: hoveredMovieId === movie.id ? 1 : 0,
        transition: 'max-height 0.3s ease, opacity 0.3s ease',
        }}
        >
          <button className='movie-item-button'
          onClick={() => console.log(`Movie ${movie.id}`)}
          >
          Watch a movie
          </button>
       </div>
   </div>
    ))}
   </div>
  </div>
)
}
export default Main;