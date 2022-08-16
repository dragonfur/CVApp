import React from "react";
import './stylesheets/Header.css'

const Header = () => {
    return (
        <div style={HeaderStyle} className='header'>
            CVMaker
        </div>
    )
}

const HeaderStyle = {
    height: '5vh',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '2em',
    backgroundColor: '#576F72',
    color: '#F0EBE3',
    padding: '1rem'
}

export default Header