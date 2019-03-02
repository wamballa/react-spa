import React from 'react';
import { Link } from 'react-router-dom';
import image from './../../assets/space-invaders-banner.png';

const Header = () => {
    return (
        <header style={headerStyle}>
            <div className="card">
                <div className="card-image">
                    <img src={image} alt="" />
                    <span className="card-title">Video Game Catalogue</span>
                </div>
            </div>
            <Link style={linkStyle} to='/'>Home</Link> |
                <Link style={linkStyle} to='/about'>
                About</Link> |
                <Link style={linkStyle} to='/add'>
                Add</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}
export default Header