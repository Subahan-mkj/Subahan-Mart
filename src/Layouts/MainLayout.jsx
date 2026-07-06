import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar'; 

function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* MENU BAR */}
      <Navbar />

      {/* PAGES IN */}
      <main className="container my-5 flex-grow-1">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-dark text-secondary text-center py-4 border-top border-secondary mt-auto">
        <div className="container">
          <p className="mb-0 text-white">&copy; 2026 SubahanMart. All rights reserved.</p>
          <small className="text-muted">Built with Love using React & Bootstrap 5</small>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;