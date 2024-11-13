import React from 'react';
import Header from './Header';
import './home.css';
import Footer from './Footer';
import Main from './Main';

function Home(props) {
    return (
        <div>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default Home;