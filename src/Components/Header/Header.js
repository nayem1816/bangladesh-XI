import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <h2><a className="navbar-brand" href="#">Bangladesh XI</a></h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-dark mr-4" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark mr-4" href="#">Players</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark mr-4" href="#">World Cup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark mr-4" href="#">BPL</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark mr-4" href="#">IPL</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Big Bash</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;