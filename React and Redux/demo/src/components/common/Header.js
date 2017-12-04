import React from 'react';
import PropTypes from 'prop-types';
import {Link, IndexLink } from 'react-router';

// activeClassName feature comes with Link and IndexLink
// activeClassName when this link is active go ahead an apply this class for me 
const Header = () => {
    return (
        <nav>   
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "} 
            <Link to="/courses" activeClassName="active">Courses</Link>
            {" | "} 
            <Link to="/about" activeClassName="active">About</Link>
        </nav>
    );
};

Header.propTypes = {};

export default Header;
