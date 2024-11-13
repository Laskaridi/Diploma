import React from 'react';
import './home.css';
import Slider from './Slider';
import Books from './Books';

function Main(props) {
    return (
        <div className='content'>
            <div className='animation'></div>
            <div className='content-books'>
               <Slider></Slider>
               <Books></Books>
            </div>
        </div>
    );
}

export default Main;