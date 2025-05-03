import '../styles/layout/header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <div className="head">
                    <div className='head-intro'>
                        <h3>Sr(a). </h3>
                        <h3 className='head-user'>Usuário</h3>
                    </div>
                    <div className='head-main'>
                        <div className="head-img-container">
                            <img src="https://i.imgur.com/bhWcOga.png" alt="" />
                        </div>
                        <div className="head-content-container">
                            <h1>e-Auction</h1>
                        </div>
                    </div>
                </div>
                <div className="sub-head">
                    <div className="menu">
                        <div className="menu-itens">
                            <Link to="/">Listings</Link>
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                            </a>
                            <div className="dropdown-menu dropdown-menu-custom" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">All</a>
                                <a className="dropdown-item" href="#">Categories</a>
                                <a className="dropdown-item" href="#">Here</a>
                            </div>
                            <Link to="/watchlist">WatchList</Link>
                            <Link to="/create">Create Listing</Link>
                            <Link to="/login">Login</Link>
                            <Link to="">Log Out</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header