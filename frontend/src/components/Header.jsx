import React from 'react';
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
    <header>
      <div className="container" style={{ display: 'flex', alignItems: 'center', padding: '1rem 0' }}>
        <div>
          <Link to="/" style={{ fontWeight: 700, fontSize: 18 }}>AuditCo</Link>
          <div style={{ fontSize: 12, color: '#777' }}>Trusted audit services</div>
        </div>

        <nav className="header-right" style={{ marginLeft: 24 }}>
          <Link to="/services">Services</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          {token ? (
            <>
              <Link to="/admin" style={{ marginLeft: 8 }}>Admin</Link>
              <button className="btn" onClick={logout} style={{ marginLeft: 8 }}>Logout</button>
            </>
          ) : (
            <Link to="/admin/login" style={{ marginLeft: 8 }}>Admin Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
}