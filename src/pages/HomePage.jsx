import React from 'react';
import { FiTrendingUp, FiShoppingBag, FiTruck, FiShield } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

  function HomePage() {
    const { addToCart } = useCart();
    const featuredProducts = [
      {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
      category: "Gadgets"
    },
    {
      id: 3,
      name: "Classic Running Shoes",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60",
      category: "Footwear"
    },
    {
      id: 4,
      name: "Ultrabook Laptop Backpack",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60",
      category: "Accessories"
    },
    {
      id: 9,
      name: "Apple Iphone13 Pro",
      price: "$14.99",
      image: "/iphone 13 pro.jpg",
      category: "MobilePhones"
    },
    {
      id: 10,
      name: "Apple Watch Ultra",
      price: "$14.99",
      image: "/apple ultra.jpg",
      category: "Gadgets"
    },
    {
      id: 11,
      name: "Samsung S26 Ultra",
      price: "$14.99",
      image: "/s26.jpg",
      category: "MobilePhones"
    },
    {
      id: 12,
      name: "Samsung Watch Ultra",
      price: "$14.99",
      image: "samsung ultra.jpg",
      category: "Gadgets"
    }
  ];

  return (
    <div>
      {/* 1. Hero Banner */}
      <div className="p-5 mb-5 text-white bg-dark rounded-5 shadow position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e1e1e 0%, #198754 100%)' }}>
        <div className="row align-items-center py-5">
          <div className="col-md-7 ps-md-5">
            <span className="badge bg-warning text-dark mb-3 fw-bold px-3 py-2 fs-6 rounded-pill">Mega Summer Sale! ☀️</span>
            <h1 className="display-4 fw-bolder mb-3">Unbeatable Deals at SubahanMart!</h1>
            <p className="lead mb-4 opacity-75">Premium products, unbelievable prices. Up to 50% off today only!</p>
            <button className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-bold text-success shadow-sm">
              <FiShoppingBag className="me-2" /> Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* 2. Features Section */}
      <div className="row g-4 text-center mb-5">
        <div className="col-md-3">
          <div className="p-4 bg-white rounded-4 shadow-sm border-0 h-100">
            <FiTruck size={36} className="text-success mb-3" />
            <h5 className="fw-bold">Fast Delivery</h5>
            <p className="text-muted small mb-0">Quick & reliable delivery straight to your doorstep</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-4 bg-white rounded-4 shadow-sm border-0 h-100">
            <FiShield size={36} className="text-success mb-3" />
            <h5 className="fw-bold">Secure Payment</h5>
            <p className="text-muted small mb-0">100% protected and secure transactions</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-4 bg-white rounded-4 shadow-sm border-0 h-100">
            <FiTrendingUp size={36} className="text-success mb-3" />
            <h5 className="fw-bold">Best Quality</h5>
            <p className="text-muted small mb-0">Only the finest top-tier branded products</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-4 bg-white rounded-4 shadow-sm border-0 h-100">
            <FiShoppingBag size={36} className="text-success mb-3" />
            <h5 className="fw-bold">Easy Returns</h5>
            <p className="text-muted small mb-0">7-day simple and hassle-free return policy</p>
          </div>
        </div>
      </div>

      {/* 3. Trending Products Grid */}
      <div className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bolder text-dark m-0">Trending Products 🔥</h3>
          <button className="btn btn-outline-success rounded-pill px-4">View All</button>
        </div>

        <div className="row g-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden product-card">
                <img 
                  src={product.image} 
                  className="card-img-top" 
                  alt={product.name} 
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column p-4">
                  <span className="text-muted small mb-1 uppercase fw-semibold">{product.category}</span>
                  <h5 className="card-title fw-bold text-dark fs-6 text-truncate" title={product.name}>
                    {product.name}
                  </h5>
                  <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-light">
                    <span className="fs-5 fw-bolder text-success">{product.price}</span>
                    <button onClick={() => addToCart(product)} className="btn btn-success btn-sm rounded-pill px-3 py-2 small fw-bold">
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
  );
}

export default HomePage;