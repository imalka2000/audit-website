import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem('admin_token');

  function logout() {
    localStorage.removeItem('admin_token');
    navigate('/');
    window.location.reload();
  }

  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="header-left">
        <Link to="/" className="logo">AuditCo</Link>
        <div className="tagline">Trusted audit services</div>
      </div>

      {/* Center: Nav links */}
      <nav className="header-nav">
        <Link to="/services">Services</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Right: Admin/Login */}
      <div className="header-right">
        {token ? (
          <>
            <Link to="/admin" className="admin-link">Admin</Link>
            <button className="btn-logout" onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/admin/login" className="btn-login">Login</Link>
        )}
      </div>
    </header>
  );
}
