import '../assets/navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>

            <nav className="main-menu">
                <ul>
                    <li>
                        <Link to="/">
                            {/* <img className="hlogo" src="" alt="HEX.COM logo vector" /> */}
                            <span className="nav-text">
                            </span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/home">
                            <i className="fa fa-home fa-2x"></i>
                            <span className="nav-text">
                                Home
                            </span>
                        </Link>

                    </li>

                    <li>
                        <Link to="/contact">
                            <i className="fa fa-comments fa-2x"></i>
                            <span className="nav-text">
                                Contact
                            </span>
                        </Link>

                    </li>


                    <li>
                        <Link to="/about">
                            <i className="fa fa-info fa-2x"></i>
                            <span className="nav-text">
                                About
                            </span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/gallery">
                            <i className="fa fa-camera-retro fa-2x"></i>
                            <span className="nav-text">
                                Gallery
                            </span>
                        </Link>
                    </li>

                </ul>

                <ul className="logout">
                    <li>
                        <a href="#">
                            <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text">
                                Disconnect
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>

        </div>

    );
};

export default Navbar;




