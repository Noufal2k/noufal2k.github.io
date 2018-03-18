import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="App-header">
            <img className="App-logo" src="./Noufal_logo.png" alt="" />
            <a className="App-nav" href="/">My Projects</a>
            <a className="App-nav" href="/">About</a>
        </div>
    );
};

export default Header;