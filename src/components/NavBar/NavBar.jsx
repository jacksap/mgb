import React from 'react';
import './NavBar.css';

import Music from '../Music/Music'
import Shows from '../Shows/Shows'
import Merch from '../Merch/Merch'
import Gallery from '../Gallery/Gallery'

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
          <Link to="/">HOME</Link>{' '}
          <Link to="/music">MUSIC</Link>
          <Link to="/shows">SHOWS</Link>
          <Link to="/merch">MERCH</Link>{' '}
          <Link to="/gallery">GALLERY</Link>{' '}
        </nav>
          <Route exact path='/' component={App} />
          <Route path='/music' render={Music} />
          <Route path='/shows' render={Shows} />
          <Route path='/merch' render={Merch} />
          <Route path='/gallery' component={Gallery} />
        </div>
      </Router>
    );
}


export default NavBar;