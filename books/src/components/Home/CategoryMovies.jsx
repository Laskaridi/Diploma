import React, { useState, useEffect} from 'react';
import './home.css';
import {Pagination} from 'react-bootstrap';

function CategoryMovies({ category }) {
  const [hoveredMovieId, setHoveredMovieId] = useState(null);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  // Завантаження фільмів за жанром
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = process.env.REACT_APP_TMDB_API_KEY;
        const url = "https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${currentPage};"
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(Failed to fetch movies: ${response.status});
        }

        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [genreId, currentPage]);

  const renderPagination = () => {
    const items = [];
    for (let number = 1; number <= Math.min(totalPages, 10); number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };


    return (
        <div className='search-movies'>  
             <div className='animation'></div>
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
       <img src={"https://image.tmdb.org/t/p/w200${movie.poster_path}"} alt={movie.title} className='movie-image' />
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
   <Pagination className="justify-content-center mt-4">
        <Pagination.Prev
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        />
        {renderPagination()}
        <Pagination.Next
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        />
      </Pagination>
        </div>
    );
}

export default CategoryMovies;