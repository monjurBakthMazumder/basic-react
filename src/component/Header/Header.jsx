import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>My website</h1>
            <nav className="flex gap-5 justify-center items-center">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/user">User</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;