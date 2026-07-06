import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiShoppingBag, FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

function CartPage() {
  const { cart, updateQuantity, removeFromCart, cartSubtotal } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const shipping = cart.length > 0 ? 5.00 : 0;
  const total = cartSubtotal + shipping;

  // 🔽 REPLACE YOUR OLD handleCheckout WITH THIS ENTIRE BLOCK 🔽
  const handleCheckout = () => {
    // Put your real WhatsApp number here (e.g., "919876543210" if you are in India)
    const yourWhatsAppNumber = "918111007986"; 

    let message = `🛒 *New Order from SubahanMart!*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;

    cart.forEach((item, index) => {
      message += `*${index + 1}. ${item.name}*\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ${item.price} each\n`;
      message += `   Subtotal: $${(item.numericPrice * item.quantity).toFixed(2)}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `🔹 *Cart Subtotal:* $${cartSubtotal.toFixed(2)}\n`;
    message += `🔹 *Shipping Fee:* $${shipping.toFixed(2)}\n`;
    message += `⭐ *Grand Total:* $${total.toFixed(2)}\n\n`;
    message += `🚀 _Please reply to confirm shipping details!_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsAppLink = `https://wa.me/${yourWhatsAppNumber}?text=${encodedMessage}`;

    window.open(whatsAppLink, '_blank');
    setOrderPlaced(true);
  };
  // 🔼 END OF REPLACEMENT 🔼

  // ... (the rest of your return statement stays exactly the same)
  

  if (orderPlaced) {
    return (
      <div className="container py-5 text-center">
        <div className="p-5 bg-white rounded-5 shadow-sm max-width-md mx-auto">
          <FiCheckCircle size={72} className="text-success mb-4 animate__animated animate__bounceIn" />
          <h2 className="fw-bolder text-dark mb-2">Order Confirmed! 🎉</h2>
          <p className="text-muted lead mb-4">Thank you for shopping with SubahanMart. Your package will arrive shortly.</p>
          <Link to="/products" onClick={() => window.location.reload()} className="btn btn-success rounded-pill px-5 py-3 fw-bold shadow-sm">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-3">
      <h2 className="fw-bolder mb-4">Your Shopping Cart 🛒</h2>

      {cart.length === 0 ? (
        <div className="text-center py-5 bg-white rounded-4 shadow-sm">
          <FiShoppingBag size={64} className="text-muted mb-3" />
          <h4>Your cart is empty!</h4>
          <Link to="/products" className="btn btn-success rounded-pill px-4 py-2 mt-2">Discover Products</Link>
        </div>
      ) : (
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-4">
              {cart.map((item) => (
                <div key={item.id} className="row align-items-center mb-4 pb-4 border-bottom border-light">
                  <div className="col-md-2 col-4"><img src={item.image} alt={item.name} className="img-fluid rounded-3" style={{ objectFit: 'cover', height: '80px', width: '80px' }} /></div>
                  <div className="col-md-4 col-8">
                    <span className="text-muted small uppercase">{item.category}</span>
                    <h6 className="fw-bold text-dark mb-1 text-truncate">{item.name}</h6>
                    <span className="text-success fw-bold">{item.price}</span>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="d-flex align-items-center gap-2">
                      <button onClick={() => updateQuantity(item.id, -1)} className="btn btn-sm btn-light rounded-circle fw-bold">-</button>
                      <span className="px-3 fw-semibold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="btn btn-sm btn-light rounded-circle fw-bold">+</button>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 text-end">
                    <h5 className="fw-bold text-dark mb-0">${(item.numericPrice * item.quantity).toFixed(2)}</h5>
                    <button onClick={() => removeFromCart(item.id)} className="btn text-danger btn-sm mt-1 p-0 border-0 bg-transparent"><FiTrash2 /> Remove</button>
                  </div>
                </div>
              ))}
              <Link to="/products" className="text-success fw-bold text-decoration-none d-inline-flex align-items-center gap-2 mt-2"><FiArrowLeft /> Continue Shopping</Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 sticky-top" style={{ top: '90px' }}>
              <h5 className="fw-bold mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-3"><span className="text-muted">Subtotal</span><span className="fw-semibold">${cartSubtotal.toFixed(2)}</span></div>
              <div className="d-flex justify-content-between mb-3"><span className="text-muted">Shipping</span><span className="fw-semibold">${shipping.toFixed(2)}</span></div>
              <hr className="my-3" />
              <div className="d-flex justify-content-between mb-4"><span className="fs-5 fw-bold">Total</span><span className="fs-4 fw-bolder text-success">${total.toFixed(2)}</span></div>
              <button onClick={handleCheckout} className="btn btn-success w-100 rounded-pill py-3 fw-bold shadow-sm">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;