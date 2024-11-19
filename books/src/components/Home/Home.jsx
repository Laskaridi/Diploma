import React, { useState } from 'react';
import Header from './Header';
import './home.css';
import Footer from './Footer';
import Main from './Main';
import ListMovie from './ListMovie';

function Home() {
    const [movies, setMovies] = useState([]); 
    const [category, setCategory] = useState(''); 
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleSearch = async (query) => {
      if (!query) {
        setMovies([]);
        return;
      }
  
      const apiKey = '977ed025515af5100a62a22770595d94';

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
  
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]);
      }
    };
  
    const handleCategorySelect = async (selectedCategory) => {
        setCategory(selectedCategory);
        const apiKey = '977ed025515af5100a62a22770595d94';
    
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
          );
          if (!response.ok) throw new Error('Failed to fetch categories');
    
          const genres = await response.json();
          const selectedGenre = genres.genres.find(
            (genre) => genre.name.toLowerCase() === selectedCategory.toLowerCase()
          );
    
          if (!selectedGenre) return;
    
          const categoryResponse = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenre.id}&language=en-US`
          );
          if (!categoryResponse.ok) throw new Error('Failed to fetch movies by category');
    
          const categoryData = await categoryResponse.json();
          setMovies(categoryData.results || []);
        } catch (error) {
          console.error('Error fetching movies by category:', error);
          setMovies([]);
        }
      };

    return (
        <div>
            <Header onSearch={handleSearch}
                    onToggleOffcanvas={() => setShowOffcanvas(!showOffcanvas)}></Header>
            <ListMovie
              show={showOffcanvas}
              onClose={() => setShowOffcanvas(false)}
              onCategorySelect={handleCategorySelect}
            />
            <Main movies={movies}></Main>
            <Footer></Footer>
        </div>
    );
}

export default Home; 