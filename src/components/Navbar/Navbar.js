import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar bg-primary navbar-dark navbar-expand">
            <h3 className="navbar-brand p-3 mx-3" style={{ cursor: "pointer" }}>Poppers</h3>
            <ul className="navbar-nav">
                <li className="navbar-item mx-4">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item mx-4">
                    <Link to="/createAdvertisement" className="nav-link">Create New</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;