import React, { useState, useEffect } from 'react';
import './home.css';

function CategoryProduct() {
  const [moviesByCategory, setMoviesByCategory] = useState([]);
  const [loading, setLoading] = useState(false); // Стан завантаження

  // Ваш API-ключ для TMDb
  const API_KEY = '977ed025515af5100a62a22770595d94';

  const categories = [
    { name: 'Popular Movies', endpoint: 'popular' },
    { name: 'Top Rated Movies', endpoint: 'top_rated' },
    { name: 'Upcoming Movies', endpoint: 'upcoming' },
    { name: 'Now Playing Movies', endpoint: 'now_playing' },
  ];

  useEffect(() => {
    const fetchMoviesByCategories = async () => {
      try {
        // Запити до всіх категорій одночасно
        const responses = await Promise.all(
          categories.map((category) =>
            fetch(
              `https://api.themoviedb.org/3/movie/${category.endpoint}?api_key=${API_KEY}&language=en-US&page=1`
            ).then((res) => {
              if (!res.ok) throw new Error(`Error fetching ${category.name}`);
              return res.json();
            })
          )
        );

        // Збереження результатів у форматі [{ name, movies }]
        const moviesData = responses.map((response, index) => ({
          category: categories[index].name,
          movies: response.results,
        }));

        setMoviesByCategory(moviesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies by categories:', error);
        setLoading(false);
      }
    };

    fetchMoviesByCategories();
  }, [API_KEY]);

  if (loading) {
    return <p>Loading movies...</p>;
  }

    return (
        <div className='products'>
           <h2>All Movies by Categories</h2>
      {moviesByCategory.map((categoryData) => (
        <div key={categoryData.category} style={{ marginBottom: '30px' }}>
          <h3>{categoryData.category}</h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
            }}
          >
             {categoryData.movies.map((movie) => (
                <div key={movie.id} className='product-container'
                style={{
                  boxShadow: hoveredProductId === movie.id ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
                  transition: 'box-shadow 0.3s ease', 
                }}
                onMouseEnter={() => setHoveredProductId(movie.id)}
                onMouseLeave={() => setHoveredProductId(null)}
                >
                   <div className='container-img'>
                   <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className='product-image' />
                   </div>
                   <h2 className='title-product'>{movie.title}</h2>
                   <p className='description category'><strong>Release date: </strong>{movie.release_date}</p>
                   <p className='description'><strong>Rating: </strong>{movie.vote_average}</p>
                   <div className='product-button'
                   style={{
                    maxHeight: hoveredProductId === movie.id ? '100px' : '0',
                    opacity: hoveredProductId === movie.id ? 1 : 0,
                    transition: 'max-height 0.3s ease, opacity 0.3s ease',
                    }}
                    >
                      <button className='product-item-button'
                      onClick={() => console.log(`Product ${movie.id} added to cart`)}
                      >
                      Add to basket
                      </button>
                   </div>
               </div>
              ))}
              </div>
        </div>
      ))}
        </div>
    );
}

export default CategoryProduct;