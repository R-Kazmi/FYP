import React, { useState } from 'react';
import './navbar.scss'
import BuergerMenu from '../burgerMenu/BuergerMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [activePage, setActivePage] = useState("home");

    var pageLinks = {
        "home": [
            { 'name': 'Create Pin', 'link': '/create-pin' },
        ],
        "music": [
            { 'name': 'Signin', 'link': '/music' },
            { 'name': 'Search Song', 'link': '/searchMusic' }
        ],
        "film": [
            { 'name': 'Diary', 'link': '/diary/123' }
        ]
    }


    return (
        <nav id='KpcQz' className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">eHub</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly" id='nav-ul'>
                        <li className="nav-item">
                            <Link onClick={() => setActivePage("home")} className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => setActivePage("film")} className="nav-link" to="/films">Films</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => setActivePage("sport")} className="nav-link" to=''>Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => setActivePage("music")} className="nav-link" to='/music'>Music</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => setActivePage("watchparty")} className="nav-link" to="">WatchParty</Link>
                        </li>

                    </ul>

                </div>

                <BuergerMenu pageLinks={pageLinks[activePage]} />

            </div>
        </nav>
    );
};

export default Navbar;
