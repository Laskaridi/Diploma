import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const apiKey = '977ed025515af5100a62a22770595d94';
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US`
    );
    const data = await response.json();
    setMovies(data.results || []);
  };

  return (
    <SearchContext.Provider value={{ movies, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
