import React from 'react';
import './home.css';
import Slider from './Slider';
import Movies from './Movies';

function Main(props) {
    return (
        <div className='content'>
            <div className='animation'></div>
            <div className='content-books'>
               <Slider></Slider>
               <Movies></Movies>
            </div>
        </div>
    );
}

export default Main;