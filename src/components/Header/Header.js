import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-4xl'>Save most of your money!</h2>
            <h3>By giving your money to me!</h3>
        </div>
    );
};

export default Header;