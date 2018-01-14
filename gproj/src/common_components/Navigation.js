import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <div class='navigation'>
                <Link to="/" className='nav-item'>Home</Link>
                <Link to="/exercise" className='nav-item'>Exercise</Link>
            </div>
        );
    }
}

export default Navigation;
