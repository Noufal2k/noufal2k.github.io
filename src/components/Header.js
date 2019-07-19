import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="App-header">
            <img className="App-logo" src="/logo.png" alt="" />
            <div className="App-nav">
                <a href="/">My Projects</a>
                <a href="/">About</a>
            </div>    
        </div>
    );
};

export default Header;