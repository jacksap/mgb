import React from 'react';
import './NavBar.css';

import Music from '../Music/Music'
import Shows from '../Shows/Shows'
import Merch from '../Merch/Merch'
import Gallery from '../Gallery/Gallery'
import Home from '../Home/Home'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const NavBar = (props) => {
    return(
        <Router>
        <div className="NavBar">
        <nav>
          <ul className="main-nav">
            <Link className="logo" to="/"><img alt='mgb logo' src='./static/images/mygirlfriendberulogo_transparent.png'></img></Link>{' '}
            <Link to="/music">MUSIC</Link>
            <Link to="/shows">SHOWS</Link>
            <Link to="/merch">MERCH</Link>{' '}
            <Link to="/gallery">GALLERY</Link>{' '}
          </ul>
        </nav>
          <Route exact path='/' component={Home} />
          <Route path='/music' render={Music} />
          <Route path='/shows' render={Shows} />
          <Route path='/merch' render={Merch} />
          <Route path='/gallery' component={Gallery} />
        </div>
      </Router>
    );
}


export default NavBar;