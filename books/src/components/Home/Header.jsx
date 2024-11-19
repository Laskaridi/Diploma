import React, { useState } from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';

function Header({ onSearch, onToggleOffcanvas }) {
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(query);
    }
  };


  const handleSearch = () => {
    onSearch(query);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

    return (
        <div>    
          <div className='header'>
          <img src='/movie.png' alt='logo movie' className='img-logo'/>
          <button onClick={toggleMenu} className='menu-toggle-button'>
          <FontAwesomeIcon icon={faBars} className='menu-open-button' />
        </button>
        <div className={`menu ${menuOpen ? 'menu-open' : ''}`}>
          <button onClick={onToggleOffcanvas} className='category-button'> 
            <FontAwesomeIcon icon={faBars} className='icon-menu' />
            Movie categories</button>
          <div className='search-input'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='icon-search' />
              <input type='text' value={query}  onChange={handleInputChange}  onKeyDown={handleKeyDown}
               placeholder='Find a movie' className='input-header' />
              <button className='search-button' onClick={handleSearch}>Search</button>
            </div>
            <button className='login-button'>
            <FontAwesomeIcon icon={faUser} className='icon-login' />
             Sign in</button>
          </div>
          </div>
        </div>
    );
}

export default Header;