import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';

function ProductsPage() {
  const { addToCart } = useCart();
  
  // State handlers for API integration
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Electronics", "Gadgets", "Footwear", "Fashion", "Accessories"];

  // Fetching data from mock database endpoint asynchronously
  useEffect(() => {
    axios.get('/products.json')
      .then((response) => {
        setAllProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error retrieving products catalog:", err);
        setError("Failed to load catalog inventory. Please try again later.");
        setLoading(false);
      });
  }, []);

  const filteredProducts = selectedCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading Inventory...</span>
        </div>
        <p className="text-muted mt-3">Loading SubahanMart catalog...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center my-4" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4">
        <h2 className="fw-bolder text-dark">Our Products 🛍️</h2>
        <p className="text-muted">Explore items rendered directly from SubahanMart's live backend service simulation.</p>
      </div>

      <div className="row">
        {/* Sidebar Filters */}
        <div className="col-lg-3 mb-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 sticky-top" style={{ top: '90px' }}>
            <h5 className="fw-bold mb-3 text-success">Categories</h5>
            <div className="d-flex flex-column gap-2">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn text-start rounded-pill px-3 py-2 fw-semibold ${
                    selectedCategory === cat ? 'btn-success text-white' : 'btn-light text-dark'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Products Catalog */}
        <div className="col-lg-9">
          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-sm-6 col-md-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden product-card">
                  <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column p-4">
                    <span className="text-muted small mb-1 fw-semibold">{product.category}</span>
                    <h5 className="card-title fw-bold text-dark fs-6 text-truncate" title={product.name}>{product.name}</h5>
                    <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-light">
                      <span className="fs-5 fw-bolder text-success">{product.price}</span>
                      <button onClick={() => addToCart(product)} className="btn btn-outline-success btn-sm rounded-pill px-3 py-2 small fw-bold">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;