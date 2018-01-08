import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
// activeClassName feature comes with Link and IndexLink
// activeClassName when this link is active go ahead an apply this class for me 
const Header = ({loading}) => {
    return (
        <nav>   
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "} 
            <Link to="/courses" activeClassName="active">Courses</Link>
            {" | "} 
            <Link to="/about" activeClassName="active">About</Link>
            {loading && <LoadingDots interval={100} dots={20}/>}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;
