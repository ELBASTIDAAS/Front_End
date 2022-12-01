import './navBar.css'
import DataContext from '../state/dataContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const cart = useContext(DataContext).cart;

    return (
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <Link class="navbar-brand" to='/'>!</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to='/home'><i class="bi bi-house-door-fill"></i></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/catalog'>CATALOG</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/about'>ABOUT</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/admin'>ADMIN</Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <Link className="btn btn-outline-dark" to="/cart">
                            <span class="badge text-bg-dark">{cart.length}</span>
                            &nbsp;&nbsp;
                            <i class="bi bi-cart2"></i>
                        </Link>
                    </form>
                </div>
                
            </div>
        </nav>
    )
}

export default NavBar
