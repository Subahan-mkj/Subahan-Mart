import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiSearch, FiUser, FiHeart } from 'react-icons/fi';
import { useCart } from '../context/CartContext'; // Hook connected

function Navbar() {
  const { cartCount } = useCart(); // Destructure live item counts

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand fw-bolder fs-3 text-success" to="/">
          Subahan<span className="text-white">Mart</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#subahanNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="subahanNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
            <li className="nav-item"><Link className="nav-link fs-5 px-3" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link fs-5 px-3" to="/products">Products</Link></li>
          </ul>
          <form className="d-flex me-auto w-50 position-relative d-none d-lg-flex">
            <input className="form-control rounded-pill ps-4 pe-5 border-0 bg-light" type="search" placeholder="Search products..." />
          </form>
          <div className="d-flex align-items-center gap-4 text-white">
            <Link to="/" className="text-white position-relative"><FiHeart size={24} /><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>0</span></Link>
            <Link to="/cart" className="text-white position-relative">
              <FiShoppingCart size={24} />
              {/* Dynamic badge element triggers conditionally */}
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" style={{ fontSize: '10px' }}>{cartCount}</span>
              )}
            </Link>
            <Link to="/" className="text-white"><FiUser size={24} /></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;