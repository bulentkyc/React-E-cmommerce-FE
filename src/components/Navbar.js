import {NavLink} from 'react-router-dom';
import './Navbar.css';

export default function (props) {
    return (
        <nav>
            <NavLink
                exact
                className = "nav-item" 
                activeClassName="active"
                to = "/"
            >Home</NavLink>

            <NavLink
                exact
                className = "nav-item"
                activeClassName="active" 
                to = "/About"
            >About</NavLink>

            <NavLink
                exact
                className = "nav-item"
                activeClassName="active" 
                to = "/Contact"
            >Contact</NavLink>
        </nav>
    );
}